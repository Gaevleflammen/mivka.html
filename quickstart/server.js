const PORT = 6969;

const path = require('path');
const express = require('express');                                                                  
const app = express();                                                                              

app.use(express.static('public'));                                                                                  
                                                                                                                    
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {                                                                                            
    console.log(`Server running on port ${PORT}`);
});
