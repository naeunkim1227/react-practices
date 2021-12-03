data.json 형식
아 배고프다\n돈가스 땡김\n

spilt으로 잘라서 배열로 만들어 주기
['아 배고프다', '돈가스 땡김']

export default function Message({no, name, message}) {
    return (
        <li className={styles.Message}>
            <strong>{name}</strong>
            <p>
                {
                   message && message.split('\n').map((line,index) => (index > 0) ? 
                   <span key={`${no} - ${index}`}>
                       <br/>
                       {line}
                    </span> 
                    : 
                    line)
                }
            </p>
            <strong/>
            <a>삭제</a>
        </li>
    );
}


배열의 갯수가 0이상이의 경우 생각해서 삼항조건문으로 코드 작성



notifyDeleteMessage={ notifyDeleteMessage }

함수를 전달한다는 생각으로 알면 될듯,  메세지 리스트에서 notifyDeleteMessage함수 먼저 생성하고 전달, 
자식 메세지에서 함수 사용하자

제어의 경우, usestate를 사용하여, 상태가 변할때마다 값을 가져올 수 있다.
비제어의 경우 폼에서 , 이벤트를 만들어서, 가져오는 구조





  const refForm = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [password ,setPassword] = useState('');
    const [messageNo, setMessageNo] = useState(0);


    const [modalData, setModalData] = useState({isOpen: false});



를 모달데이터 하나에서 관리할 수 있게 정리한다.

o1 = {};
o1.a = 0.a
o1.b = 30;

o1 = {a: 10, b"30}


객체 복사후 내가 삭제 수정등 변경이 가능
Object.assign({},o,{b:30})



delete/api/10
{
    password: '1234'
}