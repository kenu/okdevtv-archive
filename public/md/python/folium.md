# folium

* https://folium.readthedocs.io/en/latest/
* `pip install folium`
```
import folium

map_osm = folium.Map(location=[45.5236, -122.6750])
map_osm

stamen = folium.Map(location=[45.5236, -122.6750], zoom_start=13)
stamen

stamen = folium.Map(location=[45.5236, -122.6750], tiles='Stamen Toner', zoom_start=13)
stamen

map_1 = folium.Map(location=[45.372, -121.6972], tiles='Stamen Terrain', zoom_start=12)
folium.Marker([45.3288, -121.6625], popup='Mt. Hood Meadows').add_to(map_1)
map_1
```

## cluster
```
map = folium.Map(location=[51.8860942,0.8336077], zoom_start=10, control_scale=True)
marker_cluster = folium.MarkerCluster("Public cluster").add_to(map)
folium.Marker([51.8860942,0.8336077], popup='popup').add_to(marker_cluster)
folium.Marker([51.8530942,0.8235077], popup='popup').add_to(marker_cluster)
folium.Marker([51.8641942,0.8438077], popup='popup').add_to(marker_cluster)
```

## ref: 
* 지리적 정보를 시각화할 때 괜찮은 Python 지도 모듈 Folium
  * http://pinkwink.kr/971
