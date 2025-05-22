
export type OnboardingItem = {
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    image: any;
};

export const onboardingItems: OnboardingItem[] = [
    {
        id: "1",
        title: 'Bienvenido a',
        subtitle: 'EasyGo',
        description:'Tu app todo en uno para moverte y enviar. Taxi y delivery fácil y rápido, ¡todo aquí!',
        image: require('../public/city.png'),
    },
    {
        id: "2",
        title: 'Taxi Fácil y',
        subtitle: 'Seguro',
        description:'Pide taxi rápido, ve quién te busca, conoce el precio y paga fácil. ¡Llega seguro a tu destino en Via Santa Ana!',
        image: require('../public/mockup_car_easygo.png'),
    },
    {
        id: "3",
        title: 'Delivery Sin',
        subtitle: 'Complicaciones',
        description:'Envía paquetes y más fácil y rápido. Rastrea tu envío y conoce el costo. ¡Entregas sin problemas!',
        image: require('../public/mockup_delivery_easygo.png'),
    },
];