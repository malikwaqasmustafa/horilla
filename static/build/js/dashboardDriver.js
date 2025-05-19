
const driver = window.driver.js.driver;



var steps = [
    { popover: { title: "Tableau de bord", description: "Section du tableau de bord" } },
    { element: '#attendance-activity-container', popover: { title: 'Pointage', description: "Utilisé pour permettre le pointage" } },
];

if ($('#settingsMenu').length) {
    steps.push({ element: '#settingsMenu', popover: { title: "Paramètres", description: "Configurations des Paramètres" } });
}

if ($('#notificationIcon').length) {
    steps.push({ element: '#notificationIcon', popover: { title: 'Notification', description: 'Section des notifications' } });
}

if ($('#multiLanguage').length) {
    steps.push({ element: '#multiLanguage', popover: { title: 'Langue', description: 'Options multilingues' } });
}
if ($('#multCompany').length) {
    steps.push({ element: '#multCompany', popover: { title: 'Multi-entreprises', description: 'Options multi-entreprises' } });
}
if ($('#mainNavProfile').length) {
    steps.push({ element: '#mainNavProfile', popover: { title: 'Profil', description: 'Options de profil et de changement de mot de passe' } });
}
if ($('.oh-card-dashboard').length) {
    steps.push({ element: '#tileContainer .oh-card-dashboard:nth-child(1)', popover: { title: 'Vignettes du tableau de bord', description: "Vignettes du tableau de bord de l'application"} });
}
setTimeout(() => {
    if ($('.oh-btn-group').length) {
        steps.push({ element: '.oh-btn-group:nth-child(1)', popover: { title: 'Actions du tableau de bord', description: "Options d'approbation ou de rejet" } });
    }
    if ($('#addAnnouncement').length) {
        steps.push({ element: '#addAnnouncement', popover: { title: 'Ajouter une annonce', description: "Créer une annonce à partir du tableau de bord" } });
    }
    if ($('#quickActions').length) {
        steps.push({ element: '#quickActions', popover: { title: 'Actions rapides', description: "Créer des demandes rapides" } });
    }
    if ($('.oh-sidebar__company').length) {
        steps.push({ element: '.oh-sidebar__company:nth-child(1)', popover: { title: 'Entreprise', description: "Vos droits d'accès dans l'entreprise" } });
    }
    if ($('[data-id="dashboardNav"]').length) {
        steps.push({ element: '[data-id="dashboardNav"]', popover: { title: 'App', description: 'Applications RH (ex. : Tableau de bord)' } });
    }
}, 1000);
driverObj = driver(

    {
        showProgress: false,
        animate: true,
        showButtons: ['suivant', 'précédent', 'fermer'],
        steps: steps,


    }
)



function runDriver() {
    // Start driving after checking all steps

    driverObj.drive();
    $.ajax({
        type: "get",
        url: "/driver-viewed?user=" + $(".logged-in[data-user-id]").attr("data-user-id") + "&viewed=dashboard",
        success: function (response) {

        }
    });
}
