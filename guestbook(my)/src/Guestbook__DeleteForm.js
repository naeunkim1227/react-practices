import React from "react";

import styles  from './assets/css/styles.css'


export default function () {
    return (
        <div className="{styles.Guestbook__DeleteForm}"  title="메세지 삭제"  id="dialog-delete-form" title="메세지 삭제">
           <p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
            <p class="validateTips error" >비밀번호가 틀립니다.</p>
            <form>
                <input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all" />
                <input type="hidden" id="hidden-no" value="" />
            </form>
        </div>

    )
}