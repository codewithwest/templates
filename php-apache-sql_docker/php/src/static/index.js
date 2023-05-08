//define router

const router = async () => {
    const  routes = [
        {path: "/", view: () => console.log("On dashboard")},
        {path: "/posts", view: () => console.log("On Posts")},
        {path: "/settings", view: () => console.log("On Setting")}

    ];

    //Check each route for potential match
    const potentialMatches = routes.map(route => {
         return {
            route: route,
            isMatch: location.pathname === route.path
         };
    }
    );
    //log potential matches
    console.log(potentialMatches);
};
document.addEventListener("DOMContentLoaded", ()=>{
    router();
})