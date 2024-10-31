
const oceanfps_settings = window.wc.wcSettings.getSetting( 'oceanfps_data', {} );


const oceanfps_label = window.wp.htmlEntities.decodeEntities( oceanfps_settings.title ) || window.wp.i18n.__( 'Oceanpayment FPS Payment Gateway', 'oceanpayment-fps-gateway' );




const oceanfps_Content = () => {
    return window.wp.htmlEntities.decodeEntities( oceanfps_settings.description || '' );
};


var I = function(e) {
    var t = e.components,
        n = e.title,
        r = e.icons,
        a = e.id;
    Array.isArray(r) || (r = [r]);
    var o = t.PaymentMethodLabel,
        i = t.PaymentMethodIcons;

    const style = {
        'align-items': 'center',
        'display': 'flex',
        'width': '100%'
    };

    return React.createElement("div", {
        className: "wc-oceanfps-blocks-payment-method__label ".concat(a),
        style:style
    }, React.createElement(o, {
        text: n
    }), React.createElement(i, {
        icons: r
    }))
};
const Oceanfps_Block_Gateway = {
    name: 'oceanfps',

    label: React.createElement(I, {
        id: "oceanfps",
        title: oceanfps_settings.title,
        icons: oceanfps_settings.icons
    }),

    content: Object( window.wp.element.createElement )( oceanfps_Content, null ),
    edit: Object( window.wp.element.createElement )( oceanfps_Content, null ),
    canMakePayment: () => true,
    ariaLabel: oceanfps_label,
    // placeOrderButtonLabel: window.wp.i18n.__( 'Proceed to Oceanpayment', 'oceanpayment-fps-gateway' ),
  /*  supports: {
        features: oceanfps_settings.supports,
    },*/
};

window.wc.wcBlocksRegistry.registerPaymentMethod( Oceanfps_Block_Gateway );