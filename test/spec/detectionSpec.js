describe("Browser Detector should ", function(){
  describe("contain ", function(){
    it("jQuery",function(){
      expect($).toBeDefined();
    })
  })
  describe("be able to detect ", function(){
    describe("the Browser ", function(){
      describe("Chrome ", function(){
        it("41", function() {
          var ua = "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36",
          browser = detectBrowser(ua);
          expect(browser).toBe("Chrome 41.0");
        });
        it("39", function() {
          var ua = "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36",
              browser = detectBrowser(ua);
          expect(browser).toBe("Chrome 39.0");
        });
        it("37", function(){
          var ua = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36",
              browser = detectBrowser(ua);
          expect(browser).toBe("Chrome 37.0");
        });
        it("36", function(){
          var ua = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36",
              browser = detectBrowser(ua);
          expect(browser).toBe("Chrome 36.0");
        })
        it("19", function(){
          var ua = "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1062.0 Safari/536.3",
          browser = detectBrowser(ua);
          expect(browser).toBe("Chrome 19.0");
        })
      })
    })
  })
})
