include('Javascript/views/MenuView.js');
include('Javascript/views/StartView.js');
include('Javascript/views/StartSettingsView.js');
include('Javascript/views/LoadView.js');
include('Javascript/views/HowView.js');
include('Javascript/views/SettingsView.js');
include('Javascript/views/ExitView.js');
include('Javascript/views/ExitView2.js');
include('Javascript/views/AboutView.js');
include('Javascript/views/DeleteView.js');
include('Javascript/views/GameView.js');
include('Javascript/views/GridView.js');
include('Javascript/views/SummaryView.js');
include('Javascript/views/WinnersView.js');

include('Javascript/core/Theme.js');
include('Javascript/core/Game.js');
include('Javascript/core/Team.js');
include('Javascript/core/GameTimer.js');
include('Javascript/core/ImageBank.js');


MAF.application.init({
	views: [
		{ id: 'view-MenuView', viewClass: MenuView },
		{ id: 'view-StartView', viewClass: StartView },
		{ id: 'view-StartSettingsView', viewClass: StartSettingsView },
		{ id: 'view-LoadView', viewClass: LoadView },
		{ id: 'view-HowView', viewClass: HowView },
		{ id: 'view-SettingsView', viewClass: SettingsView },
		{ id: 'view-ExitView', viewClass: ExitView },
		{ id: 'view-ExitView2', viewClass: ExitView2 },
		{ id: 'view-GameView', viewClass: GameView },
		{ id: 'view-AboutView', viewClass: AboutView },
		{ id: 'view-DeleteView', viewClass: DeleteView },
		{ id: 'view-GridView', viewClass: GridView },
		{ id: 'view-SummaryView', viewClass: SummaryView },
		{ id: 'view-WinnersView', viewClass: WinnersView },
		{ id: 'view-About', viewClass: MAF.views.AboutBox }
	],
	defaultViewId: 'view-MenuView',
	settingsViewId: 'view-About'
});