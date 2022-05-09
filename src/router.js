import { Router } from '@vaadin/router';
import './pages/home.page';
import './pages/poses.page';

const outlet = document.querySelector('#outlet');
const router = new Router(outlet);

router.setRoutes([
    { path: '/', component: 'home-page' },
    { path: '/poses', component: 'poses-page'},
    { path: '(.*)', redirect: '/' }
])