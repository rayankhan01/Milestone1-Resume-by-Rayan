

// Toggle Skills Section
const toggleSkillsButton = document.getElementById('toggleSkills');
const skillsSection = document.getElementById('skillsSection');

toggleSkillsButton?.addEventListener('click', () => {
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});

// Handle Profile Picture Preview
const profilePicInput = document.getElementById('profilePic');

if (profilePicInput) {
    profilePicInput.addEventListener('change', (event) => {
        const input = event.target as HTMLInputElement;
        
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            
            reader.onload = (e) => {
                const img = document.getElementById('profilePicPreview') as HTMLImageElement;
                if (img && e.target) {
                    img.src = e.target.result as string;
                    img.style.display = 'block';
                }
            };
            
            reader.readAsDataURL(input.files[0]);
        }
    });
}