import './style/App.css';
import HeaderImage from './asset/image/header.jpg';
import Presentation from './asset/file/presentation.pdf';
import FinalPaper from './asset/file/final_paper.pdf';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="header">
            <img src={HeaderImage} alt="" className="header_image" />
            <div className="absolute">
                <h1>Face Pixelation</h1>
                <p>Corey Huang, Allison Deaton, Ken Lin, Rebecca Yeung</p>
            </div>
        </div>
        <div className="content_block links">
            <a href={Presentation}>Presentation</a>
            <a href={FinalPaper}>Final Paper</a>
            <a href="https://github.com/chuang16/CS5805-Final-Project">Code</a>
        </div>
        <div className="content_block">
            <h2 id="abstract">Abstract</h2>
            <p>
                The increasing demand for privacy on the Internet has led to growing
                interest in face pixelation, a process involving the detection
                and obfuscation of faces in images. This project explores the implementation
                and evaluation of modern facial detection algorithms to
                facilitate effective face pixelation. Specifically, we focus on the
                YOLO (You Only Look Once) algorithm, a convolutional neural
                network-based object detection framework, and compare its performance
                with other established algorithms like MTCNN (Multi-Task
                Convolutional Neural Network).
            </p>
            <p>
                In this project, we evaluated the YOLO algorithm using the WIDER
                FACE dataset for training, validation, and testing. This study aims
                to provide insights into the practical performance of YOLO for face
                pixelation and compare it with the performance of MTCNN.
            </p>
        </div>
        <div className="content_block">
            <h2 id="yolo">You Only Look Once (YOLO)</h2>
            <p>
                The YOLO (You Only Look Once) family of object detection algorithms identify
                and classify objects in an image in a single pass, and have existing
                detection models involving facial detection.
            </p>
            <p>
                YOLOv3 inherently uses multi-scale detection, that is, the ability
                of a model to identify objects of varying sizes within an image by
                analyzing features at different scales. This algorithm can be further
                refined using feature pyramids and feature reorganization to create
                YOLOv3-C. These techniques enhance the detection of small, medium, and
                large objects (in this case, faces) by improving the way features
                are combined across different layers of the neural network with the
                goal of extracting more detailed and discriminative information about
                facial features. This is key for detecting small or distant faces,
                such as when they are in a large, crowded environment.
            </p>
            <p>
                Although we did not implement the YOLOv3-C algorithm
                described here, we compared the speed and accuracy of a
                few YOLO models with MTCNN in our analysis.
            </p>
        </div>
        <div className="content_block">
            <h2 id="mtcnn">Multi-task Convolution Neural Network (MTCNN)</h2>
            <p>
                The YOLO (You Only Look Once) family of object detection algorithms identify
                and classify objects in an image in a single pass, and have existing
                detection models involving facial detection.
            </p>
            <p>
                YOLOv3 inherently uses multi-scale detection, that is, the ability
                of a model to identify objects of varying sizes within an image by
                analyzing features at different scales. This algorithm can be further
                refined using feature pyramids and feature reorganization to create
                YOLOv3-C. These techniques enhance the detection of small, medium, and
                large objects (in this case, faces) by improving the way features
                are combined across different layers of the neural network with the
                goal of extracting more detailed and discriminative information about
                facial features. This is key for detecting small or distant faces,
                such as when they are in a large, crowded environment.
            </p>
            <p>
                Although we did not implement the YOLOv3-C algorithm
                described here, we compared the speed and accuracy of a
                few YOLO models with MTCNN in our analysis.
            </p>
        </div>
        <div className="content_block">
            <h2 id="results">Results and Conclusion</h2>
            <p>
                Both YOLO and MTCNN are modern, capable algorithms for face detection, each excelling in specific contexts. YOLO’s single-pass architecture makes it extremely fast, offering an excellent precision-speed tradeoff ideal for real-time applications such as live video analysis and monitoring. However, it lacks built-in facial landmark detection and performs less effectively in specialized face detection tasks. In contrast, MTCNN, with its three-stage pipeline of P-net, R-net, and O-net, is slower but achieves higher accuracy in challenging conditions, such as varying lighting, occlusions, and different poses. Its built-in landmark detection makes it well-suited for face-specific tasks requiring detailed analysis, though its complexity and slower performance make it less optimal for real-time scenarios.
            </p>
            <p>
                Future work could explore several promising directions. One avenue is the development of surveillance-obstructive fashion, such as clothing with adversarial patterns that function as invisibility cloaks to thwart facial recognition algorithms. Another potential focus is a detailed numerical analysis of how YOLO and MTCNN perform under conditions of significant facial occlusion, such as with face masks or obscured features. Questions about the impact of occlusion on detection accuracy, bounding box precision, and algorithm adaptability could provide insights relevant to the intersection of data privacy and machine learning, further advancing the protection of biometric privacy.
            </p>
        </div>
      </div>
      <div className="navbar">
        <a href="#abstract" className="nav">Abstract</a>
        <a href="#yolo" className="nav">You Only Look Once (YOLO)</a>
        <a href="#mtcnn" className="nav">Multi-task Convolution Neural Network (MTCNN)</a>
        <a href="#results" className="nav">Results and Conclusion</a>
      </div>
    </div>
  );
}

export default App;
