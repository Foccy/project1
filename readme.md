# QnA, 해결

<hr>

## tips and add

<ul>
        <li>
            자주쓰는 옵션(position display) reset.css와 함께 추가 해두고 class로 쓰도록 하자 border font)
        </li>
        <li>
            border,font bg등 웹페이지에서 통용되는 옵션을 미리 설정하고 사용하면 편하다
        </li>
        <hr>
        <li>
            1. navi바 mouseover: 전체화면 blur
        </li>
    </ul>

### commit - mainSlideMainfuncTab

<ul>
    <li>
        커밋내용:mainslide - mainfunc 탭 
    </li>
</ul>

### commit - 2slide tabmenu query,buttonlist css

<ul>
    <li>
        커밋내용: 2슬라이드 탭메뉴 구현 ,  메인슬라이드 buttonList css 수정
    </li>
</ul>

### commit - mainslide css modify

<ul>
    <li>커밋 내용 :
        css 구조 수정후에 slogan, buttonList, mainfunc 메인슬라이드에서 
        벗어난 것 수정했음. heade> header bottom 안으로 옮김
    </li>
</ul>

### commit - slide jquery

<ul>
    <li>
        메인 슬라이드 jquery on 은 돌아가는데 
        z인덱스는 안먹어서 화면이 안돌아감
    </li>
    <li>
        문제 해결 : z인덱스 문제x css 전반적인 position 문제 구조 수정함
    </li>
</ul>

### commit - hover complete

<ul>
    <li>
        2슬라이드 
    </li>
</ul>

### commit - hover 추가

<ul>
    <li>
    commit.mainfuc 아이콘, a안텍스트가 함께 rotate 되는 문제> 아이콘만 혼자 돌아야함. hover시 떨림 문제
    </li>
    <li>
        border 대신 outline, outline-offset을 함께 써줌.
    </li>
    <li>
        같은 문제로, .wrap_card 안의 이미지만 transition scale을 먹어야하는데 함께 움직이는 문제
    </li>
    <li>
        이미지 태그를 감싸고 있는 card 태그에 overflow:hidden 부모요소에 적용
        + img태그 크기를 원래 박스보다 크게 잡고 max height 주면 쪼그라듦도 없음
    </li>
</ul>
