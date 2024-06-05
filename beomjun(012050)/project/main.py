from flask import Flask, render_template
import requests
import datetime

app = Flask(__name__)

HOMEUPDATETIME = {}
WEATHERUPDATETIME = {}

favicon_name = "sun"

weather_icon_link = "no data"
background_color_data = "beige"


@app.route("/", methods=["GET"])
def MainPage():
    # Django API 서버에서 데이터를 가져옴
    weather_data = requests.get("https://home-data.osxteams.net/data/weather/")
    home_data = requests.get("https://home-data.osxteams.net/data/home/")

    weather_data = weather_data.json()
    home_data = home_data.json()

    # 업데이트 시간 저장
    hometimedata = datetime.datetime.strptime(home_data[0]['updatetime'], "%Y-%m-%dT%H:%M:%S.%f")
    weathertimedata = datetime.datetime.strptime(weather_data[0]['updatetime'], "%Y-%m-%dT%H:%M:%S.%f")

    home_data[0]['updatetime'] = hometimedata
    weather_data[0]['updatetime'] = weathertimedata

    HOMEUPDATETIME['year'] = hometimedata.year
    HOMEUPDATETIME['month'] = hometimedata.month
    HOMEUPDATETIME['day'] = hometimedata.day
    HOMEUPDATETIME['hour'] = hometimedata.hour
    HOMEUPDATETIME['minute'] = hometimedata.minute
    HOMEUPDATETIME['second'] = hometimedata.second

    WEATHERUPDATETIME['year'] = weathertimedata.year
    WEATHERUPDATETIME['month'] = weathertimedata.month
    WEATHERUPDATETIME['day'] = weathertimedata.day
    WEATHERUPDATETIME['hour'] = weathertimedata.hour
    WEATHERUPDATETIME['minute'] = weathertimedata.minute
    WEATHERUPDATETIME['second'] = weathertimedata.second

    # 날씨에 따라 아이콘 변경
    if weather_data[0]['weather_text'] == "맑음":
        favicon_name = "sun"
        weather_icon_link = "sunny"
        background_color_data = "rgb(245, 245, 219)"
    elif weather_data[0]['weather_text'] == "구름 많음" or weather_data[0]['weather_text'] == "흐림":
        favicon_name = "cloud"
        weather_icon_link = "cloudy"
        background_color_data = "rgb(219, 245, 242)"
    elif weather_data[0]['weather_text'] == "차차 흐리고 비" or weather_data[0]['weather_text'] == "비" or weather_data[0]['weather_text'] == "비/눈":
        favicon_name = "rain"
        weather_icon_link = "rain"
        background_color_data = "rgb(219, 244, 245)"

    # 데이터를 HTML로 전달
    return render_template(
        "data.html",
        favicon_dir=favicon_name,
        home=home_data[0],
        weather=weather_data[0],
        hometime=HOMEUPDATETIME,
        weathertime=WEATHERUPDATETIME,
        weather_icon=weather_icon_link,
        background_color=background_color_data,
        )

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="2367", debug=True)
