const fileInput = document.getElementById('fileInput');
const dropArea = document.getElementById('dropArea');
const preview = document.getElementById('preview');
const downloadBtn = document.getElementById('downloadBtn');

// Handle file selection
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'image/jpeg') {
        processImage(file);
    } else {
        alert('Please upload a valid JPG file.');
    }
});

// Handle drag & drop
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.style.borderColor = '#007BFF';
});

dropArea.addEventListener('dragleave', () => {
    dropArea.style.borderColor = '#ccc';
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.style.borderColor = '#ccc';
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'image/jpeg') {
        processImage(file);
    } else {
        alert('Please upload a valid JPG file.');
    }
});

// Convert JPG to PNG and display
function processImage(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        preview.src = e.target.result;
        preview.style.display = 'block';
        
        // Create download link
        downloadBtn.href = e.target.result.replace('image/jpeg', 'image/png');
        downloadBtn.download = file.name.replace('.jpg', '.png');
        downloadBtn.style.display = 'inline-block';
    };
    reader.readAsDataURL(file);
}
