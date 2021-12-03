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