import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UserFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // redirige a la ruta teams, es decir, si el usuario entra a la ruta raiz, lo redirige a teams
        { 
            path: '/', 
            redirect: '/teams' 
        },
        /*
        es lo mismo que el redirect, pero con alias, el redirect redirige a la ruta, el alias hace que se pueda acceder 
        a la ruta desde dos rutas diferentes
        { path: '/teams', component: TeamsList, alias: '/teams' },
        */
        { 
            name: 'teams', 
            path: '/teams', 
            // component: TeamsList, 
            components: {
              default: TeamsList,
              footer: TeamsFooter  
            },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
            ],
            meta: { needsAuth: true }
        },
        { 
            name: 'users', 
            path: '/users', 
            // component: UsersList
            components: {
                default: UsersList,
                footer: UsersFooter
            }
        },
        /*         
        The props: true option tells Vue Router to pass the route parameters directly as props to the component. 
        In this case, TeamMembers will receive a prop called teamId containing the dynamic segment value, 
        instead of having to read it from $route.params inside the component. 
        { path: '/teams/:teamId', component: TeamMembers, props: true },
        */
        { 
            path: '/:notFound(.*)', 
            component: NotFound 
        }
    ],
    linkActiveClass: 'active',
    // _ es to
    // _2 es from
    scrollBehavior(_, _2, savedPosition) {
        /*
        to: the target Route Object being navigated to.
        from: the current route being navigated away from.
        savedPosition: only available when popstate navigations (back button, forward button, or a router.go() with a delta) are triggered. It will be the position that the user was at when they navigated away from the route, if they are using browser's back/forward buttons. If they are using router.push() or router.replace(), this will be null.
        */
       /*
       si el usuario navega con el back o forward button, se mantiene la posicion del scroll, sino se resetea a la posicion 0,0
       */
       if (savedPosition) {
        return savedPosition;
       } else {
        return { left: 0, top: 0 };
       }
    }
});

// Para Guards
router.beforeEach((to, from, next) => {
    console.log('Global beforeEach');
    console.log(to, from),
    next();
});

// Para logging
router.afterEach(() => {
    console.log('Global afterEach');
});

export default router;