<template>
    <!-- <header>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/82QbjPoHmyg?autoplay=1&mute=1&loop=1"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </header> -->
    <main>
        <!-- top -->
        <section class="section section--top">
            <div class="section__title-box">
                <h2 class="section__title">2025.04.27</h2>
                <h3 class="section__subtitle">SUNDAY</h3>
            </div>
            <img src="~/assets/img/img_main.png" alt="메인 이미지">
            <h3 class="section__name">승민 <span class="accent">♥</span> 은하</h3>
            <p class="section__text">2025년 04월 27일 일요일 오전 11시<br />웨딩스퀘어 강변 3F, 루시드홀 </p>
        </section>

        <img src="~/assets/img/img_flower_1.png" alt="꽃 이미지" class="img__flower1">

        <!-- invitation -->
        <section class="section section--invitation">
            <div class="section__title-box">
                <h3 class="section__subtitle">|: INVITATION :|</h3>
                <h2 class="section__title">초대합니다</h2>
            </div>
            <p class="section__text">
                고독한 마라톤인 줄로만 알았습니다.<br>
                재촉하지 않고, 더 오래 걷자고<br>
                서로의 다리에 결혼이라는 끈을 묶고<br>
                함께 달리기로 했습니다.<br>
                <br>
                출발선에 선 이순간을 평생 기억하겠습니다.<br>
                <br>
                흔들림 없는 <span class="accent">믿음</span>의 <span class="accent">축복</span>으로<br>
                <span class="accent">사랑을 밝히며 결실</span>을 이루려고 합니다.<br>
                <br>
                귀한 걸음으로 행복의 문에 들어서는 저희를<br>
                축복해주시면 감사하겠습니다.<br>
                <br>
                도정희 <span class="small">의 아들</span> 승민<br>
                김호일ㆍ김정자 <span class="small">의 딸</span> 은하
            </p>

            <img src="~/assets/img/img_bird_1.png" alt="꽃 이미지" class="img__bird1">

            <button type="button" class="btn btn__link">
                <img src="~/assets/img/ico_phone.png" alt="전화 아이콘" class="btn__icon">
                <span class="btn__text">축하 인사말 전하기</span>
            </button>
        </section>

        <!-- gallery -->
        <section class="section section--gallery">
            <div class="section__title-box">
                <h3 class="section__subtitle">|: GALLERY :|</h3>
                <h2 class="section__title">갤러리</h2>
            </div>
            <ul class="gallery">
                <li v-for="(item, idx) in galleryList" :key="idx" class="gallery__item">
                    <button type="button" class="btn__gallery">
                        <img src="~/assets/img/img_main.png" alt="사진">
                    </button>
                </li>
            </ul>
            <button type="button" class="btn">
                <span class="btn__text">사진 더보기</span>
                <img src="~/assets/img/ico_arrow_down.png" alt="아래 화살표 아이콘" class="btn__icon">
            </button>
        </section>

        <!-- calender -->
        <section class="section section--calender">
            <ul class="count">
                <li class="count__item">
                    <p class="count__title">DAYS</p>
                    <h4 class="count__num">100</h4>
                </li>
                <li class="count__item">
                    <p class="count__title">HUOR</p>
                    <h4 class="count__num">01</h4>
                </li>
                <li class="count__item">
                    <p class="count__title">MIN</p>
                    <h4 class="count__num">01</h4>
                </li>
                <li class="count__item">
                    <p class="count__title">SEC</p>
                    <h4 class="count__num">01</h4>
                </li>
            </ul>
            <p class="section__text">승민 <span class="accent">♥</span> 은하의 결혼식이 <span class="accent">100일</span> 남았습니다.
            </p>
            <div class="calender">
                <div class="calender__top">
                    <h2 class="calender__date">2025.4</h2>
                    <p class="calender__time">AM 11:00</p>
                </div>
                <table class="calender__inner">
                    <thead>
                        <tr>
                            <th>일</th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th>토</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="disabled">30</td>
                            <td class="disabled">31</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                        </tr>
                        <tr>
                            <td class="dday">27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td class="disabled">1</td>
                            <td class="disabled">2</td>
                            <td class="disabled">3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- location -->
        <section class="section section--location">
            <div class="section__title-box">
                <h3 class="section__subtitle">|: LOCATION :|</h3>
                <h2 class="section__title">오시는 길</h2>
            </div>
            <p class="section__text">
                웨딩스퀘어 강변 3F, 루시드홀<br>
                서울 광진구 광나루로56길 85<br>
                <span class="small">Tel. 02-3424-7000</span>
            </p>
            <div class="btn__container">
                <button type="button" class="btn">
                    <img src="~/assets/img/ico_naver.png" alt="네이버 아이콘" class="btn__icon">
                    <span class="btn__text">네이버지도</span>
                </button>
                <button type="button" class="btn">
                    <img src="~/assets/img/ico_kakao_1.png" alt="카카오내비 아이콘" class="btn__icon">
                    <span class="btn__text">카카오내비</span>
                </button>
            </div>
            <ul class="info">
                <li class="info__item">
                    <h4 class="info__title">지하철</h4>
                    <ul class="info__text">
                        <li class="info__text-item">
                            <span class="green">●</span> 2호선 강변역 하차
                        </li>
                        <li class="info__text-item">
                            * 테크노마트 판매동 지하1층과 연결
                        </li>
                    </ul>
                </li>
                <li class="info__item">
                    <h4 class="info__title">버스</h4>
                    <ul class="info__text">
                        <li class="info__text-item">
                            [시외ㆍ고속버스] 동서울종합터미널 하차 후 강변역 통로 이용 (도보 5분)
                        </li>
                    </ul>
                </li>
                <li class="info__item">
                    <h4 class="info__title">자가용</h4>
                    <ul class="info__text">
                        <li class="info__text-item">
                            네비게이션: “강변테크노마트” 검색
                        </li>
                        <li class="info__text-item">
                            주소: “구의동 546-4” 검색
                        </li>
                        <li class="info__text-item">
                            주차: 강변테크노마트 지하주차장 B3,B4층 이용
                        </li>
                    </ul>
                </li>
            </ul>
        </section>

        <img src="~/assets/img/img_flower_2.png" alt="꽃 이미지" class="img__flower1">

        <!-- account -->
        <section class="section section--account">
            <div class="section__title-box">
                <h3 class="section__subtitle">|: ACCOUNT :|</h3>
                <h2 class="section__title">마음 전하실 곳</h2>
            </div>
            <p class="section__text">
                참석이 어려우신 분들을 위해<br>
                계좌번호를 기재하였습니다.<br>
                너그러운 마음으로 양해 부탁드립니다.<br>
            </p>
            <ul class="account">
                <li class="account__item">
                    <button type="button" class="btn">
                        <span class="btn__text">신랑측 계좌번호</span>
                        <img src="~/assets/img/ico_arrow_up.png" alt="링크 아이콘" class="btn__icon">
                    </button>
                    <ul class="account__list">
                        <li class="account__list-item">
                            <div class="account__left">
                                <p class="account__text">국민은행 434702-01-306083</p>
                                <p class="account__text">도정희</p>
                            </div>
                            <button type="button" class="btn btn--sm">
                                <span class="btn__text">복사</span>
                            </button>
                        </li>
                        <li class="account__list-item">
                            <div class="account__left">
                                <p class="account__text">우리은행 1002-154-439032</p>
                                <p class="account__text">홍승민</p>
                            </div>
                            <button type="button" class="btn btn--sm">
                                <span class="btn__text">복사</span>
                            </button>
                        </li>
                    </ul>
                </li>
                <li class="account__item">
                    <button type="button" class="btn">
                        <span class="btn__text">신부측 계좌번호</span>
                        <img src="~/assets/img/ico_arrow_up.png" alt="링크 아이콘" class="btn__icon">
                    </button>
                    <ul class="account__list">
                        <li class="account__list-item">
                            <div class="account__left">
                                <p class="account__text">우리은행 1002-854-087103</p>
                                <p class="account__text">김은하</p>
                            </div>
                            <button type="button" class="btn btn--sm">
                                <span class="btn__text">복사</span>
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>

        <!-- end -->
        <section class="section section--end">
            <img src="~/assets/img/img_end.png" alt="메인 이미지" class="img__end">
            <h2 class="section__msg">
                응원해주시고 격려해주신 모든 분들께 감사합니다.<br>
                행복하게 잘 살겠습니다.
            </h2>
        </section>
    </main>

    <!-- footer -->
    <footer>
        <button type="button" class="btn btn__link">
            <img src="~/assets/img/ico_link.png" alt="링크 아이콘" class="btn__icon">
            <span class="btn__text">링크주소 복사하기<span class="accent">♥</span></span>
        </button>
        <p class="copyright">Copyright 2024.<strong>eunhey_k</strong>. All rights reserved.</p>
    </footer>
</template>

<script setup>
const galleryList = ref([
    { src: "~/assets/img/img_flower_1.png" },
    { src: "~/assets/img/img_flower_1.png" },
    { src: "~/assets/img/img_flower_1.png" },
    { src: "~/assets/img/img_flower_1.png" },
    { src: "~/assets/img/img_flower_1.png" },
    { src: "~/assets/img/img_flower_1.png" },
    { src: "~/assets/img/img_flower_1.png" },
    { src: "~/assets/img/img_flower_1.png" },
    { src: "~/assets/img/img_flower_1.png" },
]);
</script>

<style scoped>
@import url(~/assets/css/pages/index.scss);
</style>