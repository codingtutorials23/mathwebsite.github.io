package Main;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/Hello")
public class Hello extends HttpServlet {
private static final long serialVersionUID = 1L;
public Hello() {
super();
 }

protected void doGet(HttpServletRequest request, HttpServletResponse                   

response)  throws ServletException, IOException {
    PrintWriter out = response.getWriter();
    response.setContentType("text/html");
    String path = request.getContextPath();
    String ip = request.getRemoteAddr();
    out.print("<html>" +
    "<title>Hello</title>" +
            "Hello World"+ "<br>" +
    "Your ip is: " + ip + "<br>" +
    "Your path is: " + path
    + "</html>");       
}
protected void doPost(HttpServletRequest request, HttpServletResponse response)   

throws     ServletException, IOException {

}

}
