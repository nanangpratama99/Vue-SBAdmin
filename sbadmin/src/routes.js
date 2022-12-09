import Home from "./pages/HomePage.vue"
import Login from "./pages/LoginPage.vue"
import Register from "./pages/RegisterPage.vue"

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }

]