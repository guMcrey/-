function PromiseGet(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText, this)
                } else {
                    let resJson = {
                        code: this.status,
                        response: this.response
                    }
                    reject(resJson, this)
                }
            }
        }
        xhr.send()
    })
}