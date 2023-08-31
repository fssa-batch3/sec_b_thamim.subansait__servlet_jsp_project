package in.fssa.doboo.servlets;

import java.io.File;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

@WebServlet("/upload_track")
public class TrackUpload extends HttpServlet {
    private static final long serialVersionUID = 1L;
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Directory to save uploaded files
        String uploadDir = getServletContext().getRealPath("/uploads");
        File uploadDirFile = new File(uploadDir);
        if (!uploadDirFile.exists()) {
            uploadDirFile.mkdir();
        }
        
        // Process audio file
        Part audioPart = request.getPart("audioFile");
        String audioFileName = audioPart.getSubmittedFileName();
        String audioFilePath = uploadDir + File.separator + audioFileName;
        audioPart.write(audioFilePath);

        // Process image file
        Part imagePart = request.getPart("imageFile");
        String imageFileName = imagePart.getSubmittedFileName();
        String imageFilePath = uploadDir + File.separator + imageFileName;
        imagePart.write(imageFilePath);

        response.getWriter().println("Files uploaded successfully.");
    }
}
