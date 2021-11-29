import React from "react";


export default function () {
    return (
        <div className="Guestbook__DeleteForm">
           <p class="validateTips normal">작성시 입력했던 비밀번호를 입력하세요.</p>
            <p class="validateTips error" >비밀번호가 틀립니다.</p>
            <form>
                <input type="password" id="password-delete" value="" class="text ui-widget-content ui-corner-all" />
                <input type="hidden" id="hidden-no" value="" />
            </form>
        </div>

    )
}