import { RouterContext } from '../../contexts';
import { ContactsPage } from '../../pages/Contacts';
import { ReservationPage } from '../../pages/Reservation'
import { ROUTES } from '../../Routes';

const PageResolver = (route: string) => {
    switch (route) {
        case 'default':
        case 'ReservationPage':
            return <ReservationPage />;
        case 'Contacts':
            return <ContactsPage />
    }
}

export const BaseLayout = () => {
    return ( 
        <RouterContext.Consumer>
            {
                ({ currentRoute, setCurrentRoute }) => (
                    <>
                        <header>
                            {ROUTES.map(route => (
                                <a
                                 href='#'
                                 onClick={() => setCurrentRoute(route.id)}
                                >
                                    {route?.name}
                                </a>
                            ))}
                        </header>
                        <main>
                            {PageResolver(currentRoute)}
                        </main>
                        <footer>2024 ©</footer>    
                    </>
                )
            }
        </RouterContext.Consumer>
    )
};