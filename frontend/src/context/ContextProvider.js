import { createContext, useContext, useState, useEffect} from 'react'
import { fetchData } from '../utils/FetchData'


const StateContext = createContext()

export const ContextProvider = ({children}) => {

    const [activeGuest, setActiveGuest] = useState('')
    const [weddingDate, setweddingDate] = useState("");
    
    useEffect(() => {
        const getActiveGuest = async () => {
            const guest = await fetchData('/api/get-guest/key', 'GET')
            if (guest){
                setActiveGuest(guest)
            }else{
                setActiveGuest('')
            }
        }
        const fetchDate = async () => {
            const date = await fetchData(
              "/api/wedding-date/",
              "GET"
            );
            setweddingDate(date);
          };
        fetchDate();
        getActiveGuest()
        
    }, [])

    return (
        <StateContext.Provider value={{activeGuest, setActiveGuest, weddingDate, setweddingDate}}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () =>  useContext(StateContext);