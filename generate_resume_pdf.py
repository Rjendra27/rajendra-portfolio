import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle

def create_resume():
    output_dir = "/Users/kanna/.gemini/antigravity/scratch/rajendra-portfolio/public"
    os.makedirs(output_dir, exist_ok=True)
    pdf_path = os.path.join(output_dir, "Bijjam_Rajendra_Reddy_Resume.pdf")

    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=40,
        leftMargin=40,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        alignment=1, # Center
        textColor=colors.HexColor('#000000')
    )

    contact_style = ParagraphStyle(
        'DocContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        alignment=1, # Center
        textColor=colors.HexColor('#333333')
    )

    section_heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=colors.HexColor('#000000'),
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#222222')
    )

    bold_body_style = ParagraphStyle(
        'BoldBodyCustom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=colors.HexColor('#000000')
    )

    right_align_style = ParagraphStyle(
        'RightAlign',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        alignment=2, # Right
        textColor=colors.HexColor('#000000')
    )

    right_sub_style = ParagraphStyle(
        'RightSub',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        alignment=2, # Right
        textColor=colors.HexColor('#444444')
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.2,
        leading=12.5,
        leftIndent=12,
        firstLineIndent=-8,
        textColor=colors.HexColor('#222222')
    )

    story = []

    # Title
    story.append(Paragraph("BIJJAM RAJENDRA REDDY", title_style))
    story.append(Spacer(1, 4))

    # Contact line
    contact_text = '9948252297 &nbsp;&nbsp;•&nbsp;&nbsp; brreddy2004@gmail.com &nbsp;&nbsp;•&nbsp;&nbsp; GitHub: <font color="#0056b3"><u>github.com/Rjendra27</u></font> &nbsp;&nbsp;•&nbsp;&nbsp; LinkedIn: <font color="#0056b3"><u>linkedin.com/in/bijjam-rajendra-reddy-b33745268</u></font>'
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 10))

    # Section 1: Profile
    story.append(Paragraph("Profile", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#666666'), spaceAfter=6, spaceBefore=2))
    profile_p = "Computer Science Engineering graduate with hands-on experience in Python, Flask, Machine Learning, Computer Vision, REST APIs, and AI-enabled application development. Built Python-based projects including an IPL score prediction application and a real-time collision alert system using YOLOv8, OpenCV, and PyTorch. Strong foundation in OOP, data structures, algorithms, SQL, and software development, with a passion for AI and emerging technologies."
    story.append(Paragraph(profile_p, body_style))
    story.append(Spacer(1, 10))

    # Section 2: Education
    story.append(Paragraph("Education", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#666666'), spaceAfter=6, spaceBefore=2))

    # Ed 1
    ed1_left = Paragraph("<b>Bachelor of Technology (CSE)</b>, Kalasalingam University<br/><font color='#555555'>Virudhunagar, Tamil Nadu</font>", body_style)
    ed1_right = Paragraph("2022 - 2026<br/><b>CGPA: 7.8</b>", right_align_style)
    t1 = Table([[ed1_left, ed1_right]], colWidths=[380, 150])
    t1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    story.append(t1)

    # Ed 2
    ed2_left = Paragraph("<b>Class XII</b>, Chaitanya junior college<br/><font color='#555555'>Guntur, Andhra Pradesh</font>", body_style)
    ed2_right = Paragraph("2020 - 2022<br/>Percentage: <b>88.3%</b>", right_align_style)
    t2 = Table([[ed2_left, ed2_right]], colWidths=[380, 150])
    t2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(t2)
    story.append(Spacer(1, 10))

    # Section 3: Skills
    story.append(Paragraph("Skills", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#666666'), spaceAfter=6, spaceBefore=2))
    skills = [
        "<b>Programming Languages:</b> Python, Java.",
        "<b>Core:</b> OOP, Data Structures, Algorithms.",
        "<b>Web/Backend:</b> HTML, CSS, React, Flask, REST APIs.",
        "<b>Database:</b> MySQL, DBMS.",
        "<b>Machine Learning:</b> scikit-learn, Pandas, OpenCV, PyTorch, YOLOv8.",
        "<b>Tools:</b> Git, GitHub, VS Code, Power BI, Excel."
    ]
    for s in skills:
        story.append(Paragraph(f"• &nbsp;{s}", bullet_style))
        story.append(Spacer(1, 2))

    story.append(Spacer(1, 8))

    # Section 4: Projects
    story.append(Paragraph("Projects", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#666666'), spaceAfter=6, spaceBefore=2))

    # Project 1
    p1_header = Paragraph("<b>AI Travel Companion – NeverASolo</b> &nbsp;<font color='#555555'>— React, Flask/REST APIs, Firebase</font>", body_style)
    story.append(p1_header)
    story.append(Spacer(1, 3))
    story.append(Paragraph("• &nbsp;Developed a modern travel planning platform focused on Indian destinations with multilingual accessibility support.", bullet_style))
    story.append(Paragraph("• &nbsp;Built trip creation workflows, personalized itinerary planning, and responsive UI components for mobile and desktop users.", bullet_style))
    story.append(Paragraph("• &nbsp;Integrated scalable API-driven architecture and designed the application for future AI-based travel recommendations.", bullet_style))
    story.append(Paragraph("• &nbsp;<b>GitHub:</b> <font color='#0056b3'><u>github.com/Rjendra27/trip-together</u></font> &nbsp;|&nbsp; <b>Live Demo:</b> <font color='#0056b3'><u>trip-together-1.vercel.app</u></font>", bullet_style))
    story.append(Spacer(1, 8))

    # Project 2
    p2_header = Paragraph("<b>IPL Score Prediction</b> &nbsp;<font color='#555555'>— Python, Flask, scikit-learn</font>", body_style)
    story.append(p2_header)
    story.append(Spacer(1, 3))
    story.append(Paragraph("• &nbsp;Developed a Python-based Flask web application to predict IPL innings scores based on match conditions.", bullet_style))
    story.append(Paragraph("• &nbsp;Preprocessed historical IPL datasets and trained a Random Forest Regressor for score prediction.", bullet_style))
    story.append(Paragraph("• &nbsp;Integrated the trained ML model with the Flask backend to generate real-time predictions.", bullet_style))
    story.append(Paragraph("• &nbsp;<b>GitHub:</b> <font color='#0056b3'><u>github.com/Rjendra27/ipl-score-prediction</u></font>", bullet_style))
    story.append(Spacer(1, 8))

    # Project 3
    p3_header = Paragraph("<b>Collision Alert System – Computer Vision for Vehicle Safety</b> &nbsp;<font color='#555555'>— Python, YOLOv8, OpenCV, PyTorch</font>", body_style)
    story.append(p3_header)
    story.append(Spacer(1, 3))
    story.append(Paragraph("• &nbsp;Developed a real-time computer vision application using Python, YOLOv8, and OpenCV for object detection and vehicle safety.", bullet_style))
    story.append(Paragraph("• &nbsp;Implemented object tracking, distance estimation, and trajectory analysis to identify potential collision risks.", bullet_style))
    story.append(Paragraph("• &nbsp;Applied Dynamic ROI processing and angular analysis to improve detection accuracy and real-time performance.", bullet_style))
    story.append(Paragraph("• &nbsp;<b>GitHub:</b> <font color='#0056b3'><u>github.com/Rjendra27/Collision-Alert-System</u></font>", bullet_style))
    story.append(Spacer(1, 10))

    # Section 5: Certificates
    story.append(Paragraph("Certificates", section_heading_style))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#666666'), spaceAfter=6, spaceBefore=2))
    story.append(Paragraph("• &nbsp;<b>DBMS</b> &nbsp;|&nbsp; <b>DAA</b> &nbsp;|&nbsp; <b>Hackathon</b> (CodeChef Certified)", bullet_style))

    doc.build(story)
    print(f"PDF successfully compiled at: {pdf_path}")

if __name__ == '__main__':
    create_resume()
