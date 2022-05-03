export function exif(file, placeholder) {
    EXIF.getData(file, function () {
        //prevents throwing error when no exif GPS data is present
        if (this.exifdata.GPSLatitudeRef) {

            const convertDMStoDD = (degrees, minutes, seconds, direction) => {
                let dd = degrees + minutes / 60 + seconds / (60 * 60);
                if (direction === 'S' || direction === 'W') {
                    dd = dd * -1;
                }
                return dd;
            };

            const latitude = (convertDMStoDD(this.exifdata.GPSLatitude[0],
                this.exifdata.GPSLatitude[1],
                this.exifdata.GPSLatitude[2],
                this.exifdata.GPSLatitudeRef)).toFixed(6);

            const longitude = (convertDMStoDD(this.exifdata.GPSLongitude[0],
                this.exifdata.GPSLongitude[1],
                this.exifdata.GPSLongitude[2],
                this.exifdata.GPSLongitudeRef)).toFixed(6);

            placeholder.innerHTML += 'GPS Longitude: ' + longitude + '&deg;' +
                '<br>' + 'GPS Latitude: ' + latitude + '&deg;';
        } else {
            placeholder.innerHTML += 'No GPS data found';
        }
    });
}
