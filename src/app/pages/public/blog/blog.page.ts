import { Page, PreparePage } from '@nimble-ts/core/page';
import { ArticleService } from 'src/app/services/article.service';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import { Article } from './models/article.model';

@PreparePage({
	template: require('./blog.page.html'),
	style: require('./blog.page.scss'),
	title: 'Eric Ferreira - Blog'
})
export class BlogPage extends Page {

	public loading: boolean = true;
	public articles: Article[] = [];
	public projects: { title: string, identifier: string, description: string, demoPage?: string }[] = [];
	public adminMenu = [
		{ name: 'Novo artigo', path: 'blog/article/new' }
	];

	public get adminIsLogged() {
		return this.authService.adminIsLogged;
	}

	constructor(
		private authService: FirebaseAuthService,
		private articleService: ArticleService
	) {
		super();
		this.projects = [
			{
				title: 'Nimble Framework',
				identifier: 'nimble-cli',
				description: 'Projeto de framework SPA que desenvolvi no intuito de facilitar o desenvolvimento de páginas e websites, no qual o framework torna-se uma solução completa parar tal propósito, além de gerar SSG em tempo de build.',
				demoPage: 'https://ericferreira1992.github.io/nimble-page'
			},
			{
				title: 'Ag-Table',
				identifier: 'ag-table',
				description: 'Componente para Angular 2+, o AgTable é uma alternativa para desenvolvedores que precisam de agilidade e eficiência na hora de codificar. Com o AgTable é possível criar uma tabela de dados totalmente funcional com o mínimo de esforço',
				demoPage: 'https://ericferreira1992.github.io/ag-table'
			},
			{
				title: 'Alphabet Search View',
				identifier: 'alphabet-search-view',
				description: 'Componente em Flutter para listar e pesquisar itens de dados simples ou complexos, semelhante a uma lista de contatos do telefone',
				demoPage: 'https://ericferreira1992.github.io/alphabet-search-view'
			},
			{
				title: 'AgVirtualScroll',
				identifier: 'ag-virtual-scroll',
				description: 'Componente para Angular 2+ para resolver o problema de exibição de muitos itens na tela através da virtualização de dados. É fácil de usar e funciona de forma leve e limpa. Ele também trabalha com diferentes alturas de itens.',
				demoPage: 'https://ericferreira1992.github.io/ag-virtual-scroll'
			},
			{
				title: 'SliderCarousel',
				identifier: 'slider-carousel',
				description: 'Componente para Angular 2+ que exibe imagens em carrossel, que faz transição em modelo de slide. Esta é uma alternativa simples e leve, na qual não há necessidade do uso de dependências terceiras.',
				demoPage: 'https://ericferreira1992.github.io/slider-carousel'
			},
			{
				title: 'Pac-coin Game',
				identifier: 'pac-coin',
				description: 'Projeto criado com finalidade didática para aprender mais sobre o Canvas do HTML5. O jogo é uma releitura do jogo PacMan.',
				demoPage: 'https://ericferreira1992.github.io/pac-coin'
			},
		];
	}

	public async onInit() {
		this.articles = await this.articleService.get();
		this.loading = false;
	}

	public onDestroy() {
	}
}