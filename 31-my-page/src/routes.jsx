import App from  "./App"
import ErrorPage from "./ErrorPage"
import Profile from "./Profile"

const routes = [
{
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
},
{
    path: "profile/name:",
    element: <Profile />
}]

export default routes