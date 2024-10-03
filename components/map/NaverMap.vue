<template>
    <div class="map">
        <div id="map" style="width: 100%; height: 100%;"></div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRuntimeConfig } from '#app';

const clientId = useRuntimeConfig().public.clientId;

onMounted(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    script.onload = initMap; // 스크립트 로드 후 지도 초기화
    document.head.appendChild(script);
});

function initMap() {
    const position = new naver.maps.LatLng(37.535428227989875, 127.09555499286496); // 초기 위치 설정

    const map = new naver.maps.Map('map', {
        center: position,
        zoom: 16 // 초기 줌 레벨 설정
    });

    const markerOptions = {
        position: position.destinationPoint(90, 15), // 동쪽으로 15m 이동한 위치
        map: map,
        icon: {
            url: '/img/example/sally.png', // 마커 아이콘 URL
            size: new naver.maps.Size(50, 52), // 아이콘 크기
            origin: new naver.maps.Point(0, 0), // 아이콘의 원점
            anchor: new naver.maps.Point(25, 26) // 앵커 포인트
        }
    };

    const marker = new naver.maps.Marker(markerOptions); // 마커 생성
}
</script>
