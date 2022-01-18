import { Page, PreparePage } from '@nimble-ts/core/page';
import { RouteParams } from '@nimble-ts/core/providers/route-params/route-params';
import { Form, Validators } from '@nimble-ts/core/forms';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../models/article.model';

// import * as Quill from 'quill';
import { Editor } from '@tiptap/core';
import Document from '@tiptap/extension-document';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight'

@PreparePage({
	template: require('./add-article.page.html'),
	style: require('./add-article.page.scss'),
	title: 'Eric Ferreira - Novo artigo'
})
export class AddArticlePage extends Page {

	public loading: boolean = true;
	public editing: boolean = false;
	// private commentEditor: Quill;
	public editor: Editor = null;
	public editorMenu: {
		icon?: string,
		title?: string,
		action?: () => void,
		isActive?: () => boolean,
		type?: string,
	}[] = [];

	public form: Form;
	public article: Article;

	private get id(): string { return this.routeParams.params.id; }

	constructor(
		private articleService: ArticleService,
		private routeParams: RouteParams
	) {
		super();
		this.form = new Form({
			content: {}
		});
		this.editing = this.routeParams.params.id;
	}

	public async onInit() {
		if (this.editing) {
			this.article = await this.articleService.getById(this.id);
			this.loading = false;
		}
		else {
			this.loading = false;
		}
	}

	public onAfterInit() {
		this.prepareEditor();
	}

	private prepareEditor() {
		this.render(() => {
			this.editor = new Editor({
				element: document.querySelector('#editor'),
				autofocus: true,
				extensions: [
					Document.extend({
						content: 'heading block*',
					}),
					StarterKit.configure({
						document: false,
					}),
					Highlight,
				],
				onCreate: () => {
					this.editor.chain().setTextSelection(this.editor.getCharacterCount() + 1).run();
				},
				content: localStorage.getItem('ericferreira1992_draft_article') ?? '<h1>Título</h1><p>Subtítulo</p>',
				onUpdate: () => {
					this.render();
					console.log('UPDATE');
				},
				onSelectionUpdate: () => {
					this.render();
					console.log('SELETION');
				},
			});
			this.editorMenu = [
				{
					icon: 'format_bold',
					title: 'Negrito',
					action: () => this.editor.chain().focus().toggleBold().run(),
					isActive: () => this.editor.isActive('bold'),
				  },
				  {
					icon: 'format_italic',
					title: 'Itálico',
					action: () => this.editor.chain().focus().toggleItalic().run(),
					isActive: () => this.editor.isActive('italic'),
				  },
				  {
					icon: 'strikethrough_s',
					title: 'Cortado',
					action: () => this.editor.chain().focus().toggleStrike().run(),
					isActive: () => this.editor.isActive('strike'),
				  },
				  {
					icon: 'code',
					title: 'Código',
					action: () => this.editor.chain().focus().toggleCode().run(),
					isActive: () => this.editor.isActive('code'),
				  },
				  {
					icon: 'highlight',
					title: 'Destacar',
					action: () => this.editor.chain().focus().toggleHighlight().run(),
					isActive: () => this.editor.isActive('code'),
				  },
				  {
					type: 'divider',
				  },
				  {
					icon: 'title',
					title: 'Título tamanho 1',
					action: () => this.editor.chain().focus().toggleHeading({ level: 1 }).run(),
					isActive: () => this.editor.isActive('heading', { level: 1 }),
				  },
				  {
					icon: 'title',
					title: 'Título tamanho 2',
					action: () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
					isActive: () => this.editor.isActive('heading', { level: 2 }),
				  },
				  {
					icon: 'format_textdirection_l_to_r',
					title: 'Parágrafo',
					action: () => this.editor.chain().focus().setParagraph().run(),
					isActive: () => this.editor.isActive('paragraph'),
				  },
				  {
					icon: 'format_list_bulleted',
					title: 'Lista normal',
					action: () => this.editor.chain().focus().toggleBulletList().run(),
					isActive: () => this.editor.isActive('bulletList'),
				  },
				  {
					icon: 'format_list_numbered',
					title: 'Lista ordenada',
					action: () => this.editor.chain().focus().toggleOrderedList().run(),
					isActive: () => this.editor.isActive('orderedList'),
				  },
				  {
					icon: 'integration_instructions',
					title: 'Bloco de códigos',
					action: () => this.editor.chain().focus().toggleCodeBlock().run(),
					isActive: () => this.editor.isActive('codeBlock'),
				  },
				  {
					type: 'divider',
				  },
				  {
					icon: 'format_quote',
					title: 'Comentário',
					action: () => this.editor.chain().focus().toggleBlockquote().run(),
					isActive: () => this.editor.isActive('blockquote'),
				  },
				  {
					icon: 'horizontal_rule',
					title: 'Separador',
					action: () => this.editor.chain().focus().setHorizontalRule().run(),
				  },
				  {
					type: 'divider',
				  },
				  {
					icon: 'wrap_text',
					title: 'Quebra de linha',
					action: () => this.editor.chain().focus().setHardBreak().run(),
				  },
				  {
					icon: 'format_clear',
					title: 'Limpar formatação',
					action: () => this.editor.chain().focus().clearNodes().unsetAllMarks().run(),
				  },
				  {
					type: 'divider',
				  },
				  {
					icon: 'undo',
					title: 'Undo',
					action: () => this.editor.chain().focus().undo().run(),
				  },
				  {
					icon: 'redo',
					title: 'Redo',
					action: () => this.editor.chain().focus().redo().run(),
				  },
			];
		});
	}

	public cancel(): void {
		
	}

	public async save(): Promise<void> {
		const data = this.editor.getHTML();
		localStorage.setItem('ericferreira1992_draft_article', data)
		console.log(localStorage.getItem('ericferreira1992_draft_article'));
	}
}