export default translateConfig;

/** @ngInject */
function translateConfig($translateProvider) {
    $translateProvider.translations('en', {
        'OPENACHEQUINGACCOUNT': 'Open a chequing account',
        'OPENASAVINGSACCOUNT': 'Open a savings account',
        'OPENAU.S.DOLLARACCOUNT': 'Open a U.S. Dollar account',
        'REVIEWMYEVERYDAYBANKINGNEEDS': 'Review my everyday banking needs',
        'SWITCHTOTD': 'Switch to TD',
        'APPLYFOROVERDRAFTPROTECTION': 'Apply for Overdraft Protection',
        'REVIEWMYEVERYDAYCANADAISACOUNTRYFORALLBANKINGNEEDS': 'Review my everyday canada is a country for all banking needs'
    });


    $translateProvider.translations('de', {
        'OPENACHEQUINGACCOUNT': 'Opan ae chaquing aeccount',
        'OPENASAVINGSACCOUNT': 'Opan ae saevings aeccount',
        'OPENAU.S.DOLLARACCOUNT': 'Opan ae U.S. Dollaer aeccount',
        'REVIEWMYEVERYDAYBANKINGNEEDS': 'Raviaw my everydaey baenking naads',
        'SWITCHTOTD': 'Switccch to TD',
        'APPLYFOROVERDRAFTPROTECTION': 'Aepply for Ovardraft Protaction',
        'REVIEWMYEVERYDAYCANADAISACOUNTRYFORALLBANKINGNEEDS': 'Review my everyday canada is a country for all banking needs'
    });

    $translateProvider.preferredLanguage('en');
}