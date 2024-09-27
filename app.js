// دالة حفظ الملاحظات
function saveNotes() {
    const notes = document.getElementById('notes-input').value;
    const result = document.getElementById('notes-result');

    if (notes.trim()) {
        localStorage.setItem('studentNotes', notes);
        result.textContent = "تم حفظ الملاحظات بنجاح!";
        result.style.color = "green";
    } else {
        result.textContent = "يرجى كتابة ملاحظاتك أولاً.";
        result.style.color = "red";
    }
}

// استرجاع الملاحظات المحفوظة عند تحميل الصفحة
window.onload = function() {
    const savedNotes = localStorage.getItem('studentNotes');
    if (savedNotes) {
        document.getElementById('notes-input').value = savedNotes;
    }

    // استرجاع تقييم الجاهزية المحفوظ
    const savedReadiness = localStorage.getItem('readinessLevel');
    if (savedReadiness) {
        document.getElementById('knowledge-level').value = savedReadiness;
    }

    // إظهار رسالة الترحيب
    alert("أهلاً بك في تطبيق تركي للغة الإنجليزية");
};

// دالة تقييم الجاهزية
function assessReadiness() {
    const level = document.getElementById('knowledge-level').value;
    const result = document.getElementById('readiness-result');

    if (level >= 1 && level <= 10) {
        localStorage.setItem('readinessLevel', level); // حفظ المستوى في Local Storage
        result.textContent = `مستوى جاهزيتك للامتحان هو: ${level}/10`;
        result.style.color = "blue";
    } else {
        result.textContent = "يرجى إدخال رقم صحيح من 1 إلى 10.";
        result.style.color = "red";
    }
}

// إضافة معالج لتسجيل الدخول
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const result = document.getElementById('login-result');
    
    // يمكنك إضافة منطق للتحقق من اسم المستخدم وكلمة المرور
    if (username === "student" && password === "1234") {
        result.textContent = "مرحبًا بك، " + username + "!";
        result.style.color = "green";
    } else {
        result.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة.";
        result.style.color = "red";
    }
});
