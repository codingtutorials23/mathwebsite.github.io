function resizeFrame(f) {
                f.style.height = 60 + "px";
            }

            $(document).ready(function() {;

                var htmlCode = document.createElement("div"); 
                var head = document.getElementById('google_ad_468x60');
                var myFrame = document.createElement("iframe")
                    myFrame.name      = "childframe"
                    myFrame.id        = "childframe"

                    myFrame.src       = "data:text/html, " + "<script>" + "<!--\ngoogle_ad_client = \"pub-0123456789abcdef\";\ngoogle_alternate_color = \"FFFFFF\";\ngoogle_ad_width = 468;\ngoogle_ad_height = 60;\ngoogle_ad_format = \"468x60_as\";\ngoogle_ad_channel =\"0123456789\";\ngoogle_color_border = \"FFFFC6\";\ngoogle_color_bg = \"FFFFFF\";\ngoogle_color_link = \"000000\";\ngoogle_color_url = \"666666\";\ngoogle_color_text = \"333333\";\n//-->"+"<\/script>"+ "<script src = \"http://pagead2.googlesyndication.com/pagead/show_ads.js\">"+"<\/script>"

                    myFrame.width     = "468"
                    myFrame.scrolling = "no"
                    myFrame.setAttribute('marginheight', '0px')
                    myFrame.setAttribute('marginwidth' , '0px')
                    myFrame.setAttribute('frameborder' , '0'  )
                head.appendChild(myFrame)

            });
