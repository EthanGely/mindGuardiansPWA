import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Notification from './components/Notification';

function App() {
    const [showNotification, setShowNotification] = useState(false);

    const handleShowNotification = () => {
        setShowNotification(true);

        // You can set a timeout to hide the notification after a certain duration
        setTimeout(() => {
            setShowNotification(false);
        }, 3000); // 3000 milliseconds (3 seconds) as an example
    };

    return (
        <>
            <div>
                <Header/>
                <div>
                    <h1>PWA Notification PoC</h1>
                    <button onClick={handleShowNotification}>Show Notification</button>

                    {showNotification && <Notification message="This is a notification!" />}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default App
