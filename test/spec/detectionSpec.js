describe("Browser Detector should ", function(){
  describe("contain ", function(){
    it("jQuery",function(){
      expect($).toBeDefined();
    })
  })
  //Tests for checking detection
  describe("be able to detect ", function(){
    //Tests for browser detection
    describe("the Browser ", function(){
      describe("Internet Explorer ", function(){
        it("11", function() {
          var ua = "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; Tablet PC 2.0; LCJB; rv:11.0) like Gecko",
              browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 11.0");
        });
        it("10", function(){
          var ua = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)",
              browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 10.0")
        })
        it("9", function(){
          var ua = "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 7.1; Trident/5.0)",
              browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 9.0")
        })
        it("8", function(){
          var ua = "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)",
              browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 8.0")
        })
        it("7b", function(){
          var ua = "Mozilla/4.0(compatible; MSIE 7.0b; Windows NT 6.0)",
              browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 7.0b")
        })
        it("7", function(){
          var ua = "Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.0; WOW64; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; c .NET CLR 3.0.04506; .NET CLR 3.5.30707; InfoPath.1; el-GR)",
              browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 7.0")
        })
        it("6.1", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 6.1; Windows XP; .NET CLR 1.1.4322; .NET CLR 2.0.50727)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 6.1")
        })
        it("6.01", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 6.01; Windows NT 6.0)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 6.01")
        })
        it("6.0b", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 6.0b; Windows NT 5.0; YComp 5.0.0.0) (Compatible; ; ; Trident/4.0)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 6.0b")
        })
        it("6.0", function(){
          var ua = "Mozilla/4.0 (Compatible; Windows NT 5.1; MSIE 6.0) (compatible; MSIE 6.0; Windows NT 5.1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 6.0")
        })
        it("5.5b1", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 5.5b1; Mac_PowerPC)"
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 5.5b1")
        })
        it("5.5", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 6.1; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 5.5")
        })
        it("5.23", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 5.23; Mac_PowerPC)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 5.23")
        })
        it("5.17", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 5.17; Mac_PowerPC Mac OS; en)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 5.17");
        })
        it("5.01", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0; YComp 5.0.2.6; MSIECrawler)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 5.01");
        })
        it("5.0b1", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 5.0b1; Mac_PowerPC)"
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 5.0b1")
        })
        it("5.0", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT 6.0; Trident/4.0; InfoPath.1; SV1; .NET CLR 3.0.04506.648; .NET4.0C; .NET4.0E)"
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 5.0")
        })
        it("4.5", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 4.5; Windows NT 5.1; .NET CLR 2.0.40607)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 4.5");
        })
        it("4.0", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 4.0; Windows 95; .NET CLR 1.1.4322; .NET CLR 2.0.50727)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 4.0");
        })
        it("3.0B", function(){
          var ua = "Mozilla/2.0 (compatible; MSIE 3.0B; Windows NT)"
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 3.0B");
        })
        it("3.0", function(){
          var ua = "Mozilla/3.0 (compatible; MSIE 3.0; Windows NT 5.0)"
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 3.0");
        })
        it("2.0", function(){
          var ua = "Mozilla/4.0 (compatible; MSIE 2.0; Windows NT 5.0; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)";
          browser = detectBrowser(ua);
          expect(browser).toBe("Internet Explorer 2.0")
        })
      })

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

      describe("Firefox ", function(){
        it("0.10", function(){
          var ua = "Mozilla/5.0 (X11; U; Linux i686; rv:1.7.3) Gecko/20040914 Firefox/0.10"
          browser = detectBrowser(ua);
          expect(browser).toBe("Firefox 0.10")
        })

      })

      describe("Safari ", function(){

      })

      describe("Maxthon", function(){

      })

      describe("Palemoon", function(){

      })

    })
  })
})
