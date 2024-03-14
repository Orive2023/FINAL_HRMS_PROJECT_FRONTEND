import React, { useState, useEffect } from "react";
import Keycloak from "keycloak-js";

const client = new Keycloak({
    url: "http://localhost:8080",
    realm: "myrealm",
    clientId: "myclient",
});

const useAuth = () => {
    const [token, setToken] = useState(null);
    const [roles, setRoles] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        const initializeKeycloak = async () => {
            try {
                await client.init({ onLoad: "login-required" });
                const authenticated = await client.authenticated;

                if (authenticated) {
                    console.log("User Name:", client.idTokenParsed.name);
                    setName(client.idTokenParsed.name);
                    localStorage.setItem("UserName", client.idTokenParsed.name);
                    localStorage.setItem("AuthToken", client.token);
                    setToken(client.token);
                    setRoles(client.resourceAccess.myclient.roles);
                    localStorage.setItem("Role",client.resourceAccess.myclient.roles);
                } else {
                    console.error("Failed to authenticate");
                }
            } catch (error) {
                console.error("Failed to initialize Keycloak", error);
            }
        };

        initializeKeycloak();
    }, []); // Empty dependency array to ensure the effect runs only once

    const isHR = roles.includes("client_HR");
    const isEmployee = roles.includes("client_Employee");

    const logout = () => {
        localStorage.removeItem("AuthToken");
        localStorage.removeItem("UserName");
        client.logout();
    };
    

    return { token, isHR, isEmployee, client, logout, name };
};

export default useAuth;


// import React, { useState, useEffect } from "react";
// import Keycloak from "keycloak-js";
// import axios from "axios";

// const client = new Keycloak({
//     url: "http://localhost:3000",
//     realm: "myrealm",
//     clientId: "myclient",
// });

// const useAuth = () => {
//     const [token, setToken] = useState(null);
//     const [roles, setRoles] = useState([]);
//     const [name, setName] = useState("");

//     useEffect(() => {
//         const initializeKeycloak = async () => {
//             try {
//                 await client.init({ onLoad: "login-required" });
//                 const authenticated = await client.authenticated;

//                 if (authenticated) {
//                     console.log("User Name:", client.idTokenParsed.name);
//                     setName(client.idTokenParsed.name);
//                     localStorage.setItem("UserName", client.idTokenParsed.name);
//                     localStorage.setItem("AuthToken", client.token);
//                     setToken(client.token);
//                     setRoles(client.resourceAccess.myclient.roles);
//                     localStorage.setItem("Role", client.resourceAccess.myclient.roles);
                    
//                     // Set token in Axios headers
//                     setAxiosAuthHeader(client.token);
//                 } else {
//                     console.error("Failed to authenticate");
//                 }
//             } catch (error) {
//                 console.error("Failed to initialize Keycloak", error);
//             }
//         };

//         initializeKeycloak();
//     }, []); // Empty dependency array to ensure the effect runs only once

//     const setAxiosAuthHeader = (token) => {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     };

//     const isHR = roles.includes("client_HR");
//     const isEmployee = roles.includes("client_Employee");

//     const logout = () => {
//         localStorage.removeItem("AuthToken");
//         localStorage.removeItem("UserName");
//         delete axios.defaults.headers.common["Authorization"];
//         client.logout();
//     };

//     return { token, isHR, isEmployee, client, logout, name };
// };

// export default useAuth;
