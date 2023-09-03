package in.fssa.doboo.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import in.fssa.doboo.exception.ValidationException;
import in.fssa.doboo.model.UserEntity;
import in.fssa.doboo.service.UserService;

/**
 * Servlet implementation class UserProfileServlet
 */
@WebServlet("/user/profile")
public class UserProfileServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Cookie[] ck = request.getCookies();
        String userId = null;

        if (ck != null) {
            for (Cookie cookie : ck) {
                if ("userid".equals(cookie.getName())) {
                    userId = cookie.getValue();
                    break;
                }
            }
        }

        if (userId == null) {
            // Handle the case where the userId cookie is not found.
            response.sendRedirect("login"); // Redirect to login page or appropriate error page.
            return;
        }

        try {
            UserService userService = new UserService();
            UserEntity user = userService.findByUserId(Integer.parseInt(userId));
            if (user != null) {
                request.setAttribute("user", user);
                RequestDispatcher rd = request.getRequestDispatcher("/user_profile.jsp");
                rd.forward(request, response);
            } else {
                // Handle the case where the user is not found.
                response.sendRedirect("user_not_found"); // Redirect to an appropriate error page.
            }
        } catch (NumberFormatException | ValidationException e) {
            e.printStackTrace();
            PrintWriter out = response.getWriter();
            out.println(e.getMessage());
        }
    }
}

