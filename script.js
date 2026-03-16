@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
    --primary-color: #ff007f;
    --primary-hover: #e60073;
    --secondary-color: #00d2ff;
    --secondary-hover: #00b8e6;
    --accent-color: #7a00ff;
    --background-start: #ff9a9e;
    --background-end: #fecfef;
    --card-bg: rgba(255, 255, 255, 0.9);
    --text-main: #2d3748;
    --text-muted: #718096;
    --border-color: #e2e8f0;
    --success-color: #059669;
    --error-color: #dc2626;
    --success-bg: #d1fae5;
    --error-bg: #fee2e2;
    --shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 10px 25px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 20px 30px rgba(0, 0, 0, 0.15);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: url('background.png') no-repeat center center fixed;
    background-size: cover;
    color: var(--text-main);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.header {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #fff;
    padding: 1.5rem 1rem;
    text-align: center;
    box-shadow: var(--shadow-sm);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.header h1 {
    font-size: 1.8rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 0.5px;
}

.main-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
}

.card {
    background-color: var(--card-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: var(--shadow-md);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.card-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    background: linear-gradient(to right, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.input-group {
    margin-bottom: 1.5rem;
    position: relative;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-main);
}

.input-group input {
    width: 100%;
    padding: 0.85rem 1.2rem;
    font-size: 1rem;
    font-family: inherit;
    color: var(--text-main);
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid transparent;
    border-radius: 12px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.input-group input:focus {
    outline: none;
    border-color: var(--secondary-color);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgba(0, 210, 255, 0.2);
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.5rem;
}

.btn {
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    box-shadow: 0 4px 15px rgba(255, 0, 127, 0.4);
}

.btn-primary:hover {
    background: linear-gradient(135deg, var(--primary-hover), #5e00c7);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 0, 127, 0.6);
}

.btn-secondary {
    background: linear-gradient(135deg, #00c6ff, var(--secondary-color));
    color: white;
    box-shadow: 0 4px 15px rgba(0, 210, 255, 0.4);
}

.btn-secondary:hover {
    background: linear-gradient(135deg, #00a1d6, var(--secondary-hover));
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 210, 255, 0.6);
}

.btn-outline {
    background-color: transparent;
    border: 2px solid var(--text-muted);
    color: var(--text-muted);
}

.btn-outline:hover {
    border-color: var(--text-main);
    color: var(--text-main);
    background-color: rgba(0, 0, 0, 0.05);
}

.result-section {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 2px dashed rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    opacity: 1;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(0);
}

.result-section.hidden {
    display: none;
    opacity: 0;
    transform: translateY(20px);
}

.result-box {
    background: linear-gradient(to right bottom, #ffffff, #f8fafc);
    border-radius: 12px;
    padding: 1.25rem;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
}

.result-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--accent-color);
}

.result-box h3 {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.highlight {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(to right, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.status-msg {
    font-size: 1.25rem;
    font-weight: 700;
}

.status-approved {
    color: var(--success-color);
    background-color: var(--success-bg);
    border-color: #a7f3d0;
}

.status-approved::before {
    background: var(--success-color);
}

.status-rejected {
    color: var(--error-color);
    background-color: var(--error-bg);
    border-color: #fecaca;
}

.status-rejected::before {
    background: var(--error-color);
}

.footer {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1.5rem 1rem;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    font-size: 0.95rem;
    font-weight: 500;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

@media (min-width: 640px) {
    .header h1 {
        font-size: 2rem;
    }

    .button-group {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .btn {
        flex: 1;
    }

    #btn-reset {
        flex-basis: 100%;
    }
}@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
    --primary-color: #ff007f;
    --primary-hover: #e60073;
    --secondary-color: #00d2ff;
    --secondary-hover: #00b8e6;
    --accent-color: #7a00ff;
    --background-start: #ff9a9e;
    --background-end: #fecfef;
    --card-bg: rgba(255, 255, 255, 0.9);
    --text-main: #2d3748;
    --text-muted: #718096;
    --border-color: #e2e8f0;
    --success-color: #059669;
    --error-color: #dc2626;
    --success-bg: #d1fae5;
    --error-bg: #fee2e2;
    --shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 10px 25px rgba(0, 0, 0, 0.1);
    --shadow-hover: 0 20px 30px rgba(0, 0, 0, 0.15);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: url('background.png') no-repeat center center fixed;
    background-size: cover;
    color: var(--text-main);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.header {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: #fff;
    padding: 1.5rem 1rem;
    text-align: center;
    box-shadow: var(--shadow-sm);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.header h1 {
    font-size: 1.8rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    letter-spacing: 0.5px;
}

.main-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
}

.card {
    background-color: var(--card-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: var(--shadow-md);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.card-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    background: linear-gradient(to right, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.input-group {
    margin-bottom: 1.5rem;
    position: relative;
}

.input-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-main);
}

.input-group input {
    width: 100%;
    padding: 0.85rem 1.2rem;
    font-size: 1rem;
    font-family: inherit;
    color: var(--text-main);
    background-color: rgba(255, 255, 255, 0.8);
    border: 2px solid transparent;
    border-radius: 12px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
}

.input-group input:focus {
    outline: none;
    border-color: var(--secondary-color);
    background-color: #fff;
    box-shadow: 0 0 0 4px rgba(0, 210, 255, 0.2);
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.5rem;
}

.btn {
    padding: 0.85rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    box-shadow: 0 4px 15px rgba(255, 0, 127, 0.4);
}

.btn-primary:hover {
    background: linear-gradient(135deg, var(--primary-hover), #5e00c7);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 0, 127, 0.6);
}

.btn-secondary {
    background: linear-gradient(135deg, #00c6ff, var(--secondary-color));
    color: white;
    box-shadow: 0 4px 15px rgba(0, 210, 255, 0.4);
}

.btn-secondary:hover {
    background: linear-gradient(135deg, #00a1d6, var(--secondary-hover));
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 210, 255, 0.6);
}

.btn-outline {
    background-color: transparent;
    border: 2px solid var(--text-muted);
    color: var(--text-muted);
}

.btn-outline:hover {
    border-color: var(--text-main);
    color: var(--text-main);
    background-color: rgba(0, 0, 0, 0.05);
}

.result-section {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 2px dashed rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    opacity: 1;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(0);
}

.result-section.hidden {
    display: none;
    opacity: 0;
    transform: translateY(20px);
}

.result-box {
    background: linear-gradient(to right bottom, #ffffff, #f8fafc);
    border-radius: 12px;
    padding: 1.25rem;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: var(--shadow-sm);
    position: relative;
    overflow: hidden;
}

.result-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--accent-color);
}

.result-box h3 {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.highlight {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(to right, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.status-msg {
    font-size: 1.25rem;
    font-weight: 700;
}

.status-approved {
    color: var(--success-color);
    background-color: var(--success-bg);
    border-color: #a7f3d0;
}

.status-approved::before {
    background: var(--success-color);
}

.status-rejected {
    color: var(--error-color);
    background-color: var(--error-bg);
    border-color: #fecaca;
}

.status-rejected::before {
    background: var(--error-color);
}

.footer {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1.5rem 1rem;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    font-size: 0.95rem;
    font-weight: 500;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

@media (min-width: 640px) {
    .header h1 {
        font-size: 2rem;
    }

    .button-group {
        flex-direction: row;
        flex-wrap: wrap;
    }

    .btn {
        flex: 1;
    }

    #btn-reset {
        flex-basis: 100%;
    }
}
