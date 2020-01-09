import Reac, {useState} from 'react';

let UserContext = React.createContext();
let { Provider, Consumer} = UserContext

function UserProvider(){
   
    let [user, setUser] = useState(null);
    
    function login(){
        setUser({name:"Chris David"})
    }

    function logout(){
        setUser(null)
    }

    return(
        <Provider value={}>
            {children}
        </Provider>
    )
}

export {UserProvider, Consumer as UserConsumer, Usercontext}