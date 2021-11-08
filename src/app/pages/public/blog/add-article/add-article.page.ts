import { Page, PreparePage } from '@nimble-ts/core/page';
import { RouteParams } from '@nimble-ts/core/providers/route-params/route-params';
import { Form, Validators } from '@nimble-ts/core/forms';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../models/article.model';

// import * as Quill from 'quill';
import { Editor } from '@tiptap/core';
// import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import StarterKit from '@tiptap/starter-kit';

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
				extensions: [
					StarterKit,
					/* Document,
					Paragraph,
					Text, */
				],
				content: localStorage.getItem('ericferreira1992_draft_article') ?? '<p>Hello World!</p>',
			});
			this.editorMenu = [
				{
					icon: 'bold',
					title: 'Bold',
					action: () => this.editor.chain().focus().toggleBold().run(),
					isActive: () => this.editor.isActive('bold'),
				  },
				  {
					icon: 'italic',
					title: 'Italic',
					action: () => this.editor.chain().focus().toggleItalic().run(),
					isActive: () => this.editor.isActive('italic'),
				  },
				  {
					icon: 'strikethrough',
					title: 'Strike',
					action: () => this.editor.chain().focus().toggleStrike().run(),
					isActive: () => this.editor.isActive('strike'),
				  },
				  {
					icon: 'code-view',
					title: 'Code',
					action: () => this.editor.chain().focus().toggleCode().run(),
					isActive: () => this.editor.isActive('code'),
				  },
				  {
					type: 'divider',
				  },
				  {
					icon: 'h-1',
					title: 'Heading 1',
					action: () => this.editor.chain().focus().toggleHeading({ level: 1 }).run(),
					isActive: () => this.editor.isActive('heading', { level: 1 }),
				  },
				  {
					icon: 'h-2',
					title: 'Heading 2',
					action: () => this.editor.chain().focus().toggleHeading({ level: 2 }).run(),
					isActive: () => this.editor.isActive('heading', { level: 2 }),
				  },
				  {
					icon: 'paragraph',
					title: 'Paragraph',
					action: () => this.editor.chain().focus().setParagraph().run(),
					isActive: () => this.editor.isActive('paragraph'),
				  },
				  {
					icon: 'list-unordered',
					title: 'Bullet List',
					action: () => this.editor.chain().focus().toggleBulletList().run(),
					isActive: () => this.editor.isActive('bulletList'),
				  },
				  {
					icon: 'list-ordered',
					title: 'Ordered List',
					action: () => this.editor.chain().focus().toggleOrderedList().run(),
					isActive: () => this.editor.isActive('orderedList'),
				  },
				  {
					icon: 'code-box-line',
					title: 'Code Block',
					action: () => this.editor.chain().focus().toggleCodeBlock().run(),
					isActive: () => this.editor.isActive('codeBlock'),
				  },
				  {
					type: 'divider',
				  },
				  {
					icon: 'double-quotes-l',
					title: 'Blockquote',
					action: () => this.editor.chain().focus().toggleBlockquote().run(),
					isActive: () => this.editor.isActive('blockquote'),
				  },
				  {
					icon: 'separator',
					title: 'Horizontal Rule',
					action: () => this.editor.chain().focus().setHorizontalRule().run(),
				  },
				  {
					type: 'divider',
				  },
				  {
					icon: 'text-wrap',
					title: 'Hard Break',
					action: () => this.editor.chain().focus().setHardBreak().run(),
				  },
				  {
					icon: 'format-clear',
					title: 'Clear Format',
					action: () => this.editor.chain().focus().clearNodes().unsetAllMarks().run(),
				  },
				  {
					type: 'divider',
				  },
				  {
					icon: 'arrow-go-back-line',
					title: 'Undo',
					action: () => this.editor.chain().focus().undo().run(),
				  },
				  {
					icon: 'arrow-go-forward-line',
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