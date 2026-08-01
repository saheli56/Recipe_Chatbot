// app.js

// --- 1. MOCK RECIPES & DATA STORE ---
const RECIPES_DB = [
    {
        id: "r1",
        name: "Tuscan Sun-Dried Tomato Pasta",
        cuisine: "italian",
        difficulty: "easy",
        prepTime: 20,
        tags: ["Vegetarian", "Gluten-Free Option"],
        dietary: ["vegan-option", "nut-free"],
        img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=80",
        description: "A rich, creamy pasta with sun-dried tomatoes, spinach, and Italian herbs cooked to perfection.",
        ingredients: [
            "200g Gluten-free or Standard Penne Pasta",
            "1/2 cup Sun-dried tomatoes (chopped)",
            "2 cups Fresh baby spinach",
            "3 cloves Garlic (minced)",
            "1 cup Coconut cream (or cooking cream)",
            "1 tbsp Olive oil",
            "Italian seasoning, salt, & black pepper to taste"
        ],
        substitutions: {
            "coconut cream": "Cashew cream or standard heavy cream",
            "garlic": "Asafetida powder (for low FODMAP)"
        },
        instructions: [
            "Boil the penne pasta in salted water for 10-12 minutes until al dente.",
            "Heat olive oil in a skillet over medium heat, add minced garlic and saute until aromatic.",
            "Stir in sun-dried tomatoes, spinach, and seasoning. Saute until spinach is wilted.",
            "Pour in the cream, bring to a simmer, then fold in the drained pasta.",
            "Serve hot with a sprinkle of fresh herbs."
        ],
        nutrition: { calories: 420, protein: 9, carbs: 54, fats: 18, healthScore: 88 }
    },
    {
        id: "r2",
        name: "Crispy Avocado Grilled Tacos",
        cuisine: "mexican",
        difficulty: "medium",
        prepTime: 25,
        tags: ["Vegan", "Gluten-Free"],
        dietary: ["vegan", "gluten-free", "nut-free"],
        img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80",
        description: "Smoky grilled avocados stuffed in crispy corn tortillas, topped with fresh pico de gallo.",
        ingredients: [
            "2 Ripe avocados (sliced)",
            "6 Small corn tortillas",
            "1 cup Red cabbage (shredded)",
            "1/2 cup Pico de gallo (tomatoes, onions, cilantro)",
            "1 lime (juiced)",
            "1 tsp Smoked paprika & cumin mix",
            "Cilantro lime crema (dairy-free)"
        ],
        substitutions: {
            "corn tortillas": "Lettuce wraps (for lower carbs)",
            "avocados": "Grilled portobello mushroom slices"
        },
        instructions: [
            "Coat avocado slices gently in lime juice, smoked paprika, and cumin.",
            "Grill avocado slices on a hot griddle for 2 minutes each side.",
            "Warm corn tortillas on the griddle until slightly crisp.",
            "Assemble by placing cabbage, grilled avocado, and pico de gallo inside.",
            "Drizzle with cilantro lime crema and serve immediately."
        ],
        nutrition: { calories: 350, protein: 6, carbs: 38, fats: 22, healthScore: 94 }
    },
    {
        id: "r3",
        name: "Ginger Salmon Teriyaki Bowl",
        cuisine: "japanese",
        difficulty: "medium",
        prepTime: 30,
        tags: ["Keto", "High-Protein"],
        dietary: ["keto", "nut-free"],
        img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80",
        description: "Succulent salmon fillet glazed with homemade low-sugar teriyaki sauce on a bed of cauliflower rice.",
        ingredients: [
            "2 Salmon fillets (skin-on)",
            "2 cups Cauliflower rice (fresh or frozen)",
            "2 tbsp Tamari (gluten-free soy sauce)",
            "1 tbsp Fresh ginger (grated)",
            "1 clove Garlic (minced)",
            "1 tbsp Sesame oil",
            "Green onions and sesame seeds for garnish"
        ],
        substitutions: {
            "salmon": "Firm tofu blocks (for vegetarians)",
            "tamari": "Coconut aminos (soy-free)"
        },
        instructions: [
            "Whisk tamari, grated ginger, and garlic together to create the marinade glaze.",
            "Marinate salmon fillets in the mixture for 10 minutes.",
            "Heat sesame oil in a pan, sear salmon skin-side down for 4 minutes, then flip for 3 minutes.",
            "Stir-fry cauliflower rice in a separate pan with a touch of oil until tender.",
            "Plate salmon over the rice, drizzle with remaining pan glaze, and garnish."
        ],
        nutrition: { calories: 490, protein: 38, carbs: 12, fats: 32, healthScore: 96 }
    },
    {
        id: "r4",
        name: "Lentil Chickpea Coconut Curry",
        cuisine: "indian",
        difficulty: "easy",
        prepTime: 40,
        tags: ["Vegan", "Gluten-Free"],
        dietary: ["vegan", "gluten-free", "nut-free"],
        img: "https://images.unsplash.com/photo-1547825407-2d060104b7f8?auto=format&fit=crop&w=500&q=80",
        description: "A comforting, spice-infused coconut milk curry with red lentils and tender chickpeas.",
        ingredients: [
            "1 cup Red lentils (washed)",
            "1 can Chickpeas (drained)",
            "1 can Coconut milk (light or full-fat)",
            "1 onion (diced)",
            "2 tbsp Curry powder & garam masala mix",
            "1 cup Spinach leaves",
            "Fresh cilantro leaves"
        ],
        substitutions: {
            "lentils": "Yellow split peas or chopped potatoes",
            "coconut milk": "Cashew milk or Greek yogurt (non-vegan)"
        },
        instructions: [
            "Saute onions in a large pot until golden and caramelized.",
            "Add curry spice mix and toast for 30 seconds until intensely aromatic.",
            "Pour in coconut milk, red lentils, and 2 cups of water. Simmer covered for 20 minutes.",
            "Stir in chickpeas and cook for an additional 10 minutes until lentils are soft.",
            "Fold in fresh spinach until wilted, garnish with fresh cilantro, and serve."
        ],
        nutrition: { calories: 380, protein: 14, carbs: 48, fats: 14, healthScore: 92 }
    }
];

const FLAVOR_PAIRINGS = [
    { ingredient: "Tomato", pairs: ["Basil", "Garlic", "Mozzarella", "Balsamic"], tip: "Store at room temp out of direct sunlight." },
    { ingredient: "Avocado", pairs: ["Lime", "Cilantro", "Red Onion", "Chili flakes"], tip: "Keep with the pit intact to slow browning." },
    { ingredient: "Salmon", pairs: ["Ginger", "Soy Sauce", "Lemon", "Dill"], tip: "Keep wrapped tightly in the coldest part of fridge." },
    { ingredient: "Garlic", pairs: ["Olive Oil", "Onion", "Thyme", "Rosemary"], tip: "Keep in a cool, dark, dry well-ventilated space." }
];

const OCCASIONS_DATA = [
    { title: "Romantic Evening", desc: "A cozy Italian dinner featuring Tuscan Sun-Dried Tomato Pasta and fine red wine.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80" },
    { title: "Holiday Feast", desc: "Curated rich curries and festive appetizers perfect for large family gatherings.", img: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=500&q=80" },
    { title: "Rapid Weeknight", desc: "Speedy 20-minute tacos or salmon bowls to fuel busy working families.", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=500&q=80" }
];

const CUISINES_DATA = [
    { title: "Italian Gastronomy", context: "Focused on fresh, simple ingredients, olive oil, and artisanal pastas.", tools: "Pasta Roller, Garlic Press, Cheese Microplane" },
    { title: "Authentic Mexican", context: "Deeply historical, utilizing chilies, corn masa, lime, and complex salsas.", tools: "Tortilla Press, Molcajete (mortar & pestle)" },
    { title: "Japanese Precision", context: "Centered on seasonal raw elements, umami broths, and beautiful presentation.", tools: "Very Sharp Santoku Knife, Rice Cooker, Bamboo Mat" }
];

const TIPS_DATA = [
    { title: "Rescue Salty Food", detail: "If a soup or curry is too salty, add a peeled, raw potato. It acts as a sponge, soaking up excess sodium." },
    { title: "Pro Knife Safety", detail: "Always tuck your fingers inward ('the claw') when holding ingredients, utilizing the side of the knife blade as a guide." },
    { title: "Emulsifying Sauces", detail: "Always save a cup of starchy pasta water. Adding it to oil or cream base creates a beautifully bound restaurant glaze." }
];

const GADGETS_DATA = [
    { name: "Digital Kitchen Scale", desc: "Precise gram measurement, absolute requirement for premium baking results." },
    { name: "Instant-Read Meat Thermometer", desc: "Ensures steak or salmon is pulled at the exact degree of juiciness." },
    { name: "Cast Iron Skillet", desc: "Retains heat beautifully, perfect for getting a professional golden crust." }
];

const CHALLENGES_DATA = [
    { title: "The Perfect Marinade", players: "142 Active cooks", prize: "Free Culinary AI Apron" },
    { title: "Zero-Waste Fridge Challenge", players: "89 Active cooks", prize: "$50 Grocery Voucher" }
];

const VIDEOS_DATA = [
    { title: "Mastering Pasta Dough", chef: "Chef Julia", duration: "12 mins", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80" },
    { title: "The Art of Searing Salmon", chef: "Chef Kenji", duration: "8 mins", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80" }
];

// --- 2. STATE MANAGER ---
let activeDietary = [];
let fridgeIngredients = [];
let groceryList = [];
let timerInterval = null;
let timerSeconds = 300; // 5 mins

// --- 3. PAGE INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initDietaryPreferences();
    initFridgeModule();
    initFilters();
    applyAllFilters();
    initIngredients();
    initOccasions();
    initCuisines();
    initTips();
    initProducts();
    initTimers();
    initCommunity();
    initVideos();
    initChatbot();
    initDinnerTonightPredictor();
});

// --- 4. NAVIGATION HANDLER ---
function initNavigation() {
    const tabs = document.querySelectorAll(".nav-tab");
    const sections = document.querySelectorAll(".content-section");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            tab.classList.add("active");
            const target = tab.getAttribute("data-target");
            const activeSec = document.getElementById(`sec-${target}`);
            if (activeSec) {
                activeSec.classList.add("active");
            }
        });
    });

    document.getElementById("logo-home").addEventListener("click", () => {
        tabs[0].click();
    });
}

// --- 5. RECIPE GRID RENDERER ---
function initRecipesGrid(recipes) {
    const container = document.getElementById("recipes-grid-container");
    container.innerHTML = "";

    if (recipes.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--text-secondary);">No recipes match the active criteria. Clear filters or add other items!</p>`;
        return;
    }

    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <div class="recipe-img-container">
                <img src="${recipe.img}" alt="${recipe.name}" class="recipe-img">
                <span class="recipe-badge">${recipe.difficulty}</span>
            </div>
            <div class="recipe-body">
                <div class="recipe-tags">
                    ${recipe.tags.map(t => `<span class="recipe-tag">${t}</span>`).join('')}
                </div>
                <h3 class="recipe-name">${recipe.name}</h3>
                <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:1rem; flex-grow:1;">${recipe.description}</p>
                <div class="recipe-meta">
                    <span>🕒 ${recipe.prepTime} mins</span>
                    <span>🔥 ${recipe.nutrition.calories} kcal</span>
                </div>
            </div>
        `;
        card.addEventListener("click", () => {
            openRecipeDetailsModal(recipe);
            updateNutritionSidebar(recipe);
        });
        container.appendChild(card);
    });
}

// --- 5B. FILTERS ENGINE ---
function initFilters() {
    const fCuisine = document.getElementById("filter-cuisine");
    const fDifficulty = document.getElementById("filter-difficulty");
    const fTime = document.getElementById("filter-time");
    const sInput = document.getElementById("search-recipe-input");

    fCuisine.addEventListener("change", applyAllFilters);
    fDifficulty.addEventListener("change", applyAllFilters);
    fTime.addEventListener("change", applyAllFilters);
    sInput.addEventListener("input", applyAllFilters);
}

function applyAllFilters() {
    const fCuisine = document.getElementById("filter-cuisine");
    const fDifficulty = document.getElementById("filter-difficulty");
    const fTime = document.getElementById("filter-time");
    const sInput = document.getElementById("search-recipe-input");

    const cuisineVal = fCuisine ? fCuisine.value : "all";
    const diffVal = fDifficulty ? fDifficulty.value : "all";
    const timeVal = fTime ? fTime.value : "all";
    const searchVal = sInput ? sInput.value.toLowerCase().trim() : "";

    const filtered = RECIPES_DB.filter(r => {
        // 1. Dietary preferences
        const matchesDietary = activeDietary.every(d => {
            if (d === "vegan") return r.dietary.includes("vegan");
            if (d === "gluten-free") return r.dietary.includes("gluten-free");
            if (d === "keto") return r.dietary.includes("keto");
            if (d === "nut-free") return r.dietary.includes("nut-free");
            return true;
        });

        // 2. Fridge ingredients match (if present)
        let matchesFridge = true;
        if (fridgeIngredients.length > 0) {
            const query = fridgeIngredients.map(i => i.toLowerCase());
            matchesFridge = query.some(q => r.ingredients.some(ing => ing.toLowerCase().includes(q)));
        }

        // 3. Cuisine
        const matchesCuisine = cuisineVal === "all" || r.cuisine === cuisineVal;

        // 4. Difficulty
        const matchesDiff = diffVal === "all" || r.difficulty === diffVal;

        // 5. Time
        let matchesTime = true;
        if (timeVal !== "all") {
            const maxTime = parseInt(timeVal);
            matchesTime = r.prepTime <= maxTime;
        }

        // 6. Search input
        const matchesSearch = r.name.toLowerCase().includes(searchVal) ||
                              r.description.toLowerCase().includes(searchVal) ||
                              r.ingredients.some(ing => ing.toLowerCase().includes(searchVal));

        return matchesDietary && matchesFridge && matchesCuisine && matchesDiff && matchesTime && matchesSearch;
    });

    initRecipesGrid(filtered);
}

// --- 6. FRIDGE INPUT MODULE ---
function initFridgeModule() {
    const wrapper = document.getElementById("fridge-tags-wrapper");
    const input = document.getElementById("fridge-tag-input");
    const btnSearch = document.getElementById("btn-search-fridge");
    const msg = document.getElementById("tag-helper-msg");

    function renderTags() {
        // remove existing tag elements except the input
        const tags = wrapper.querySelectorAll(".fridge-tag");
        tags.forEach(t => t.remove());

        fridgeIngredients.forEach((ing, index) => {
            const tag = document.createElement("div");
            tag.className = "fridge-tag";
            tag.innerHTML = `
                ${ing}
                <button data-index="${index}">×</button>
            `;
            tag.querySelector("button").addEventListener("click", (e) => {
                e.stopPropagation();
                fridgeIngredients.splice(index, 1);
                renderTags();
                applyAllFilters();
            });
            wrapper.insertBefore(tag, input);
        });
        msg.textContent = `${fridgeIngredients.length} ingredient(s) added`;
    }

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && input.value.trim() !== "") {
            fridgeIngredients.push(input.value.trim());
            input.value = "";
            renderTags();
            applyAllFilters();
        }
    });

    btnSearch.addEventListener("click", async () => {
        if (fridgeIngredients.length === 0) {
            alert("Please input some available ingredients first!");
            return;
        }
        
        // Use Vercel serverless function to securely generate custom recipe
        btnSearch.textContent = "Computing AI Match...";
        btnSearch.disabled = true;
        
        try {
            const prompt = `You are a culinary AI. Create a delicious recipe using these available ingredients: ${fridgeIngredients.join(", ")}. 
            Consider these dietary restrictions if any: ${activeDietary.join(", ")}.
            
            You MUST return ONLY a raw JSON object (no markdown formatting, no backticks, just the JSON) matching exactly this structure:
            {
                "name": "Recipe Title",
                "cuisine": "fusion",
                "difficulty": "medium",
                "prepTime": 25,
                "tags": ["Tag1", "Tag2"],
                "dietary": ["any matching from prompt"],
                "description": "A 1-sentence appetizing description.",
                "ingredients": ["ingredient 1 with amount", "ingredient 2 with amount"],
                "substitutions": {"ingredient 1": "substitute"},
                "instructions": ["Step 1", "Step 2", "Step 3"],
                "nutrition": { "calories": 400, "protein": 20, "carbs": 30, "fats": 15, "healthScore": 90 }
            }`;

            const response = await fetch(`/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: { temperature: 0.7 }
                })
            });
            
            if (!response.ok) throw new Error("API Error");
            const data = await response.json();
            let rawJson = data.candidates[0].content.parts[0].text;
            
            // Clean up any markdown blocks if the model accidentally includes them
            rawJson = rawJson.replace(/```json/g, '').replace(/```/g, '').trim();
            
            const newRecipe = JSON.parse(rawJson);
            newRecipe.id = "gen_" + Date.now();
            newRecipe.img = "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&w=500&q=80"; // standard chef placeholder
            
            // Add to database and show it!
            RECIPES_DB.unshift(newRecipe);
            applyAllFilters();
            
            // Navigate to recipes tab and open the modal
            document.getElementById("nav-tabs-container").querySelector("[data-target='recipes']").click();
            openRecipeDetailsModal(newRecipe);
            updateNutritionSidebar(newRecipe);
            
        } catch (e) {
            console.error(e);
            alert("AI generation failed. Showing best offline matches instead.");
            applyAllFilters();
            document.getElementById("nav-tabs-container").querySelector("[data-target='recipes']").click();
        } finally {
            btnSearch.textContent = "Run Match Algorithm";
            btnSearch.disabled = false;
        }
    });
}

// --- 7. DETAILED RECIPE MODAL ---
function openRecipeDetailsModal(recipe) {
    const modal = document.getElementById("recipe-details-modal");
    const body = document.getElementById("recipe-details-body");

    body.innerHTML = `
        <h2 style="font-family:var(--font-heading); font-size:2.8rem; margin-bottom:0.5rem; color:var(--text-primary);">${recipe.name}</h2>
        <div style="display:flex; gap:0.5rem; margin-bottom:1.5rem;">
            ${recipe.tags.map(t => `<span class="recipe-tag" style="font-size:0.8rem; padding:0.25rem 0.5rem;">${t}</span>`).join('')}
        </div>
        
        <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:2rem; margin-bottom:2rem;">
            <div>
                <h3 style="margin-bottom:0.75rem; border-bottom:1px solid var(--border-card); padding-bottom:0.25rem;">Ingredients</h3>
                <ul style="list-style-type:none; display:flex; flex-direction:column; gap:0.5rem;">
                    ${recipe.ingredients.map(ing => `
                        <li style="font-size:0.9rem; display:flex; justify-content:space-between; align-items:center;">
                            <span>• ${ing}</span>
                            <button class="btn-secondary" style="padding:0.2rem 0.5rem; font-size:0.7rem;" onclick="addGroceryItem('${ing}')">+ Grocery</button>
                        </li>
                    `).join('')}
                </ul>
                
                <h3 style="margin-top:1.5rem; margin-bottom:0.5rem; color:var(--accent-amber);">Smart Substitutes</h3>
                <div style="background:rgba(255,255,255,0.03); padding:0.75rem; border-radius:8px; font-size:0.85rem; border:1px solid var(--border-card);">
                    ${Object.entries(recipe.substitutions).map(([orig, sub]) => `<strong>${orig}</strong>: Use ${sub}.<br>`).join('')}
                </div>
            </div>
            
            <div>
                <h3 style="margin-bottom:0.75rem; border-bottom:1px solid var(--border-card); padding-bottom:0.25rem;">Cooking Instructions</h3>
                <ol style="padding-left:1.2rem; display:flex; flex-direction:column; gap:0.75rem; font-size:0.9rem;">
                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>
        </div>
        
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-card); padding-top:1.5rem;">
            <div>
                <button class="btn-primary" onclick="celebrateRecipeCompletion()">Complete Recipe! 🎉</button>
                <button class="btn-secondary" onclick="startCookAlongTimer(${recipe.prepTime})">Start Timer</button>
            </div>
            <span style="font-size:0.8rem; color:var(--text-secondary);">Prep time: ${recipe.prepTime} minutes</span>
        </div>
    `;

    modal.classList.add("active");
}

window.addGroceryItem = function(item) {
    if (!groceryList.includes(item)) {
        groceryList.push(item);
        updateGroceryListUI();
    }
};

window.celebrateRecipeCompletion = function() {
    triggerConfetti();
    alert("Spectacular! You have completed preparing this dish! 🥂");
};

window.startCookAlongTimer = function(mins) {
    document.getElementById("recipe-details-modal").classList.remove("active");
    document.getElementById("nav-tabs-container").querySelector("[data-target='kitchen']").click();
    timerSeconds = mins * 60;
    updateTimerDisplay();
    startTimer();
};

document.getElementById("btn-close-recipe").addEventListener("click", () => {
    document.getElementById("recipe-details-modal").classList.remove("active");
});

// --- 8. NUTRITION SIDEBAR ---
function updateNutritionSidebar(recipe) {
    document.getElementById("nutri-recipe-title").textContent = recipe.name;
    document.getElementById("nutri-recipe-desc").textContent = recipe.description;
    document.getElementById("nutri-cal").textContent = `${recipe.nutrition.calories} kcal`;
    document.getElementById("nutri-protein").textContent = `${recipe.nutrition.protein}g`;
    document.getElementById("nutri-carbs").textContent = `${recipe.nutrition.carbs}g`;
    document.getElementById("nutri-fats").textContent = `${recipe.nutrition.fats}g`;
    document.getElementById("nutri-health-score").textContent = `${recipe.nutrition.healthScore}%`;
    document.getElementById("nutri-health-bar").style.width = `${recipe.nutrition.healthScore}%`;
}

// --- 9. DIETARY PREFERENCES MODAL ---
function initDietaryPreferences() {
    const modal = document.getElementById("dietary-preferences-modal");
    const btnOpen = document.getElementById("btn-dietary");
    const btnClose = document.getElementById("btn-close-dietary");
    const btnApply = document.getElementById("btn-apply-dietary");

    btnOpen.addEventListener("click", () => modal.classList.add("active"));
    btnClose.addEventListener("click", () => modal.classList.remove("active"));

    btnApply.addEventListener("click", () => {
        activeDietary = [];
        const checkboxes = modal.querySelectorAll(".dietary-check:checked");
        checkboxes.forEach(cb => activeDietary.push(cb.value));

        // Update predictor banner values
        document.getElementById("val-dietary").textContent = activeDietary.length > 0 ? activeDietary.join(", ") : "Standard";

        modal.classList.remove("active");
        applyAllFilters();
    });
}

// --- 10. INGREDIENTS SECTION ---
function initIngredients() {
    const container = document.getElementById("pairings-grid-container");
    container.innerHTML = FLAVOR_PAIRINGS.map(p => `
        <div class="pairing-card">
            <div class="pairing-heading">
                <span>${p.ingredient}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div class="pairing-tags">
                ${p.pairs.map(pair => `<span class="pairing-tag">${pair}</span>`).join('')}
            </div>
            <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:0.5rem; line-height:1.3;">
                <strong>Storage:</strong> ${p.tip}
            </p>
        </div>
    `).join('');
}

// --- 11. OCCASIONS SECTION ---
function initOccasions() {
    const container = document.getElementById("occasions-grid-container");
    container.innerHTML = OCCASIONS_DATA.map(o => `
        <div class="occasion-card">
            <img src="${o.img}" alt="${o.title}" class="occasion-img">
            <div class="occasion-info">
                <h3 class="occasion-title">${o.title}</h3>
                <p style="font-size:0.8rem; color:var(--text-secondary);">${o.desc}</p>
            </div>
        </div>
    `).join('');
}

// --- 12. CUISINES SECTION ---
function initCuisines() {
    const container = document.getElementById("cuisines-grid-container");
    container.innerHTML = CUISINES_DATA.map(c => `
        <div class="cuisine-card">
            <h3 style="font-family:var(--font-heading); font-size:1.8rem; color:var(--accent-orange);">${c.title}</h3>
            <p style="font-size:0.85rem; line-height:1.4;">${c.context}</p>
            <div style="font-size:0.75rem; color:var(--text-secondary); border-top:1px solid var(--border-card); padding-top:0.5rem;">
                <strong>Tools:</strong> ${c.tools}
            </div>
        </div>
    `).join('');
}

// --- 13. TIPS SECTION ---
function initTips() {
    const container = document.getElementById("tips-grid-container");
    container.innerHTML = TIPS_DATA.map(t => `
        <div class="tip-card">
            <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:0.5rem; color:var(--accent-amber);">${t.title}</h3>
            <p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.4;">${t.detail}</p>
        </div>
    `).join('');
}

// --- 14. PRODUCTS SECTION ---
function initProducts() {
    const toolsContainer = document.getElementById("tools-container");
    toolsContainer.innerHTML = GADGETS_DATA.map(g => `
        <div style="background:rgba(255,255,255,0.02); padding:0.75rem; border-radius:8px; border:1px solid var(--border-card);">
            <h4 style="font-weight:700; font-size:0.9rem; color:var(--text-primary);">${g.name}</h4>
            <p style="font-size:0.75rem; color:var(--text-secondary);">${g.desc}</p>
        </div>
    `).join('');
}

function updateGroceryListUI() {
    const container = document.getElementById("grocery-items-container");
    if (groceryList.length === 0) {
        container.innerHTML = `<p style="color:var(--text-secondary); font-size:0.85rem;">Your list is empty. Add ingredients from any recipe details card!</p>`;
        return;
    }

    container.innerHTML = groceryList.map((item, index) => `
        <div class="grocery-item">
            <label>
                <input type="checkbox" onchange="toggleGroceryItem(${index})">
                <span>${item}</span>
            </label>
            <button class="chat-btn-icon" style="color:var(--accent-orange);" onclick="removeGroceryItem(${index})">×</button>
        </div>
    `).join('');
}

window.toggleGroceryItem = function(index) {
    // optional styling hooked via css check
};

window.removeGroceryItem = function(index) {
    groceryList.splice(index, 1);
    updateGroceryListUI();
};

// --- 15. KITCHEN TIMERS & CONVERTERS ---
function initTimers() {
    const startBtn = document.getElementById("btn-timer-start");
    const resetBtn = document.getElementById("btn-timer-reset");
    const convertBtn = document.getElementById("btn-run-conversion");

    startBtn.addEventListener("click", () => {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            startBtn.textContent = "Start";
        } else {
            startBtn.textContent = "Pause";
            startTimer();
        }
    });

    resetBtn.addEventListener("click", () => {
        clearInterval(timerInterval);
        timerInterval = null;
        timerSeconds = 300;
        startBtn.textContent = "Start";
        updateTimerDisplay();
    });

    convertBtn.addEventListener("click", () => {
        const val = parseFloat(document.getElementById("converter-value").value);
        const from = document.getElementById("converter-from").value;
        const to = document.getElementById("converter-to").value;
        const resultDiv = document.getElementById("conversion-result");

        let converted = val;
        // Simple conversion mappings
        if (from === "cups" && to === "ml") converted = val * 240;
        else if (from === "cups" && to === "grams") converted = val * 120;
        else if (from === "tbsp" && to === "ml") converted = val * 15;
        else if (from === "tbsp" && to === "grams") converted = val * 8;
        else if (from === "oz" && to === "grams") converted = val * 28.35;
        else if (from === "oz" && to === "ml") converted = val * 29.57;

        resultDiv.textContent = `${val} ${from} = ${converted.toFixed(2)} ${to}`;
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            document.getElementById("btn-timer-start").textContent = "Start";
            triggerConfetti();
            alert("Timer Completed! Time to serve your creation! 🍳");
            return;
        }
        timerSeconds--;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    document.getElementById("timer-display-label").textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// --- 16. COMMUNITY BOARD ---
function initCommunity() {
    const challengesContainer = document.getElementById("challenges-list");
    challengesContainer.innerHTML = CHALLENGES_DATA.map(c => `
        <div style="background:rgba(255,255,255,0.02); padding:0.75rem; border-radius:8px; border:1px solid var(--border-card); display:flex; justify-content:space-between; align-items:center;">
            <div>
                <h4 style="font-size:0.9rem; font-weight:700;">${c.title}</h4>
                <p style="font-size:0.75rem; color:var(--text-secondary);">${c.players}</p>
            </div>
            <span style="font-size:0.75rem; font-weight:700; color:var(--accent-amber);">${c.prize}</span>
        </div>
    `).join('');

    const btnPost = document.getElementById("btn-post-community");
    btnPost.addEventListener("click", () => {
        const title = document.getElementById("community-title").value.trim();
        const review = document.getElementById("community-review").value.trim();
        if (title === "" || review === "") {
            alert("Please input both fields before posting!");
            return;
        }
        alert("Thanks for posting your custom culinary masterpiece to the community board! 🌟");
        document.getElementById("community-title").value = "";
        document.getElementById("community-review").value = "";
    });
}

// --- 17. VIDEO WORKSPACE ---
function initVideos() {
    const container = document.getElementById("video-grid-container");
    container.innerHTML = VIDEOS_DATA.map(v => `
        <div class="video-card">
            <div class="video-thumb">
                <img src="${v.img}" alt="${v.title}">
                <div class="play-overlay" onclick="simulateVideoPlay('${v.title}')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
            </div>
            <div style="padding:1rem;">
                <h4 style="font-weight:700; font-size:0.95rem; margin-bottom:0.25rem;">${v.title}</h4>
                <p style="font-size:0.75rem; color:var(--text-secondary);">${v.chef} • ${v.duration}</p>
            </div>
        </div>
    `).join('');
}

window.simulateVideoPlay = function(title) {
    alert(`Initializing high-definition streaming server to play Chef Masterclass: "${title}"`);
};

// --- 18. PREDICTIVE DINNER WIZARD ---
function initDinnerTonightPredictor() {
    const weatherVal = document.getElementById("val-weather");
    const timeVal = document.getElementById("val-time");
    const btnPredict = document.getElementById("btn-predictive-action");

    // Dynamic weather mapping based on real-time factors
    const hours = new Date().getHours();
    if (hours < 11) timeVal.textContent = "Morning Breakfast";
    else if (hours < 16) timeVal.textContent = "Midday Lunch";
    else timeVal.textContent = "Evening Meal";

    const weathers = ["Rainy & Cool", "Sunny & Hot", "Overcast & Warm", "Breezy & Cold"];
    weatherVal.textContent = weathers[Math.floor(Math.random() * weathers.length)];

    btnPredict.addEventListener("click", () => {
        // Find best match in mock DB
        let match = RECIPES_DB[0];
        if (timeVal.textContent === "Evening Meal") {
            match = RECIPES_DB.find(r => r.difficulty === "medium") || RECIPES_DB[0];
        } else if (activeDietary.length > 0) {
            match = RECIPES_DB.find(r => activeDietary.every(d => r.dietary.includes(d))) || RECIPES_DB[0];
        }
        openRecipeDetailsModal(match);
        updateNutritionSidebar(match);
    });
}

// --- 19. FLOATING CHAT WIDGET ---
function initChatbot() {
    const trigger = document.getElementById("chat-header-trigger");
    const widget = document.getElementById("ai-chat-widget");
    const input = document.getElementById("chat-user-input");
    const btnSend = document.getElementById("btn-chat-send");
    const msgsContainer = document.getElementById("chat-messages-container");

    trigger.addEventListener("click", () => {
        widget.classList.toggle("minimized");
    });

    async function sendMessage() {
        const text = input.value.trim();
        if (text === "") return;

        // user message
        const uMsg = document.createElement("div");
        uMsg.className = "chat-msg user";
        uMsg.textContent = text;
        msgsContainer.appendChild(uMsg);
        input.value = "";
        msgsContainer.scrollTop = msgsContainer.scrollHeight;

        // bot loading state
        const loader = document.createElement("div");
        loader.className = "chat-msg bot skeleton";
        loader.style.width = "60px";
        loader.innerHTML = `
            <div class="skeleton-text" style="margin:0; height:10px;"></div>
        `;
        msgsContainer.appendChild(loader);
        msgsContainer.scrollTop = msgsContainer.scrollHeight;

        // Fetch AI response
        const reply = await getGeminiAIResponse(text);
        
        loader.remove();
        const bMsg = document.createElement("div");
        bMsg.className = "chat-msg bot";
        bMsg.innerHTML = reply;
        msgsContainer.appendChild(bMsg);
        msgsContainer.scrollTop = msgsContainer.scrollHeight;
    }

    btnSend.addEventListener("click", sendMessage);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") sendMessage();
    });
}

const aiCache = new Map();

async function getGeminiAIResponse(input) {
    // Efficient caching to prevent frequent API exhaustion
    if (aiCache.has(input)) {
        return aiCache.get(input);
    }
    
    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: "You are a culinary AI assistant. Format your response with basic HTML tags if needed. Keep it brief. User says: " + input }]
                }]
            })
        });
        
        if (!response.ok) {
            throw new Error("API Error: " + response.statusText);
        }
        
        const data = await response.json();
        const reply = data.candidates[0].content.parts[0].text.replace(/\n/g, "<br>");
        
        // Save to cache
        aiCache.set(input, reply);
        return reply;
    } catch (e) {
        console.error(e);
        return `🤖 Error communicating with Gemini API. Returning mock response...<br><br>` + getMockAIResponse(input);
    }
}

function getMockAIResponse(input) {
    const raw = input.toLowerCase();

    // substitutions
    if (raw.includes("substitute") || raw.includes("replace")) {
        return `💡 <strong>Substitution Engine:</strong> If you are missing coconut cream, you can use cashew cream or standard heavy cream. For fresh ginger, ground dry ginger (1/4 tsp per tbsp) will work well.`;
    }

    // recipe search
    if (raw.includes("pasta") || raw.includes("tuscan")) {
        return `🍝 Found <strong>Tuscan Sun-Dried Tomato Pasta</strong>! Highly rated Italian vegetarian pasta with baby spinach and garlic. Click the pasta card in the grid to calculate nutrition and view instructions.`;
    }
    if (raw.includes("taco") || raw.includes("mexican") || raw.includes("avocado")) {
        return `🌮 Found <strong>Crispy Avocado Grilled Tacos</strong>! A gluten-free and vegan taco configuration using corn tortillas and cabbage salad.`;
    }

    // allergen/dietary filters
    if (raw.includes("allergy") || raw.includes("allergic") || raw.includes("gluten") || raw.includes("vegan")) {
        return `🛡️ <strong>Dietary Safeguard:</strong> Adjust the "Dietary Filters" at the top of the screen to filter our database. All our system recipes contain details of allergens (e.g. nut-free or gluten-free options).`;
    }

    return `🤖 Culinary NLP Match: I analyzed your query "${input}". You can try searching recipes by typing ingredients in the "Fridge" searcher or selecting custom Cuisines/Occasions.`;
}

// --- 20. CONFETTI ANIMATION ---
function triggerConfetti() {
    const holder = document.getElementById("confetti-holder");
    holder.innerHTML = "";

    for (let i = 0; i < 50; i++) {
        const piece = document.createElement("div");
        piece.className = "confetti-piece";
        
        const colors = ["#f97316", "#ea580c", "#f59e0b", "#10b981", "#3b82f6"];
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random fall positions
        const xStart = Math.random() * 100;
        const xEnd = xStart + (Math.random() * 20 - 10);
        piece.style.setProperty("--x-start", `${xStart}vw`);
        piece.style.setProperty("--x-end", `${xEnd}vw`);
        
        // Random scale & speed
        piece.style.transform = `scale(${Math.random() * 0.6 + 0.4})`;
        piece.style.animationDuration = `${Math.random() * 1.5 + 1.5}s`;
        piece.style.animationDelay = `${Math.random() * 0.5}s`;
        
        holder.appendChild(piece);
    }

    setTimeout(() => {
        holder.innerHTML = "";
    }, 4000);
}

// Mock subscription modal
document.getElementById("btn-magazine").addEventListener("click", () => {
    alert("Thank you! Your email is registered for our Monthly Digital Mockup Magazine.");
});

document.getElementById("btn-open-magazine-mock").addEventListener("click", () => {
    alert("Opening interactive flipbook mockup... Magazine contains 50+ seasonal recipes, chef hacks and product ratings.");
});
