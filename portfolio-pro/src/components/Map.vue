<template>
    <div id="map">
        <l-map
            :center="center"
            :zoom="zoom"
            ref="map"
            id="map"
            @update:center="centerUpdated"
            @update:zoom="zoomUpdated">
            <l-tile-layer
            :url="url"></l-tile-layer>

        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
export default {
    components: {
        LMap,
        LTileLayer
    },
    data() {
        return {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            center: [-21.212092066743985, 55.30713545084482],
            zoom: 14,
            LMap,
            LTileLayer
        }
    },
    methods: {
        centerUpdated(center) {
            this.center = center
        },
        zoomUpdated(zoom) {
            this.zoom = zoom
        }
    },
}
</script>