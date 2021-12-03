import React, {useState, useEffect} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

import data from './assets/json/data.json';

export default function Guestbook() {
    const [messages, setMessages] = useState(data);

    useEffect(() => {
        console.log("최초 메세지 리스트 가져오기");

        fetchMessageList();

    }, []);
    //[] 안붙이면 렌더링 할때마다 호출 되므로 주의 하자

    const notifyMessage = {
        add : function (message) {
            console.log("ajax post")
            //성공했다 가정
            messages.no = 10;
            messages.password = '';

            setMessages([message, ...messages]);
            

        },
        delete:function (no) {
            console.log('메세지 상태에서 메세지 삭제');
            setMessages(messages.filter(message => message.no !== no));
        }


    }


    //최초의 경우 
    const fetchMessageList = () => {
        console.log("message List 가져오기");
    };

    return (
        <div className={styles.ScrollOuter}>
            <div>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage} />
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}