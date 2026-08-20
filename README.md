TO-DO LIST TASK 

1. Task ka Basic Purpose

Is task ka purpose ek simple To-Do List banana hai jisme user input box mein apna task enter karta hai aur Add button press karta hai. Jab user task add karta hai to woh task todos array mein store hota hai. Task add hone ke baad input box clear ho jata hai aur render function call hota hai. Render function array ke tamam tasks ko read karta hai aur unhein ul ke andar list items ki form mein display karta hai. Har task ke saath Delete button bhi hota hai jisse user task ko remove kar sakta hai. Challenge mein localStorage use kiya gaya hai taake page refresh hone ke baad bhi tasks available rahen.

2. Array Storage

Todos array ka purpose tamam to-do tasks ko store karna hai. Program start hone par array initially empty hota hai. Jab user koi task add karta hai to woh task array mein store ho jata hai. Agar user Study, Coding aur Assignment jaise tasks add kare to ye tamam tasks array ke andar store honge. Array ko program ka main data storage kaha ja sakta hai. Screen par jo tasks show hote hain woh isi array ke data se render hote hain.

3. Input Field

Input field ka purpose user se task lena hai. User input box mein apna task type karta hai. Jab Add button press hota hai to JavaScript input field ki value read karti hai. Ye value check hone ke baad todos array mein store hoti hai. Is tarah input field user aur program ke darmiyan data enter karne ka medium hai.

4. Add Handler

Add handler ka kaam Add button click hone par task ko process karna hai. Sabse pehle input ki value li jati hai aur check kiya jata hai ke input empty nahi hai. Agar input mein valid task ho to task todos array mein add hota hai. Task add hone ke baad input field clear ki jati hai. Phir render function call hota hai aur updated list screen par display hoti hai. Iska simple flow hai: input se task lena, array mein add karna, input clear karna aur list ko update karna.

5. Input Clear Karna

Task ki requirement mein kaha gaya hai ke task add hone ke baad input clear hona chahiye. Iska matlab hai ke user jab task enter karke Add button press kare to woh purana task input box mein nahi rehna chahiye. Input clear hone se user easily next task enter kar sakta hai. Ye To-Do List ko user-friendly banata hai.

6. Render Function

Render function ka main purpose array ke data ko screen par display karna hai. Jab render function call hota hai to ye todos array ke tamam tasks ko read karta hai. Phir har task ko list item ki form mein ul ke andar display karta hai. Render function new task add hone ke baad bhi call hota hai aur task delete hone ke baad bhi. Iska purpose hamesha screen ko latest array ke according update rakhna hai.

7. UL ka Role

HTML mein ul ka matlab Unordered List hai. Ye To-Do List ke tasks ko display karne ke liye container ka kaam karta hai. JavaScript todos array ke tasks ko ul ke andar list items ki form mein display karti hai. Agar array mein multiple tasks hain to har task ul ke andar separate list item ke taur par show hota hai.

8. List ko Clear Karna

Render karne se pehle existing list ko clear kiya jata hai. Iska purpose duplicate tasks ko prevent karna hai. Agar purani list clear na ki jaye aur array ko dobara render kiya jaye to same tasks multiple times show ho sakte hain. Isliye pehle old list remove hoti hai aur phir array ke tamam tasks fresh way mein display kiye jate hain.

9. forEach ka Role

ForEach array ke tamam tasks ko one by one read karne ke liye use hota hai. Agar todos array mein teen tasks hain to forEach har task par ek baar operation perform karega. Iski madad se program array ke har task ko read karke screen par display karta hai. Har task ke saath uska index bhi milta hai jo Delete button ke liye use hota hai.

10. Index ka Role

Array mein har item ka ek index hota hai aur index zero se start hota hai. For example pehle task ka index 0, doosre task ka index 1 aur teesre task ka index 2 hota hai. Delete button ke through jab koi task remove kiya jata hai to us task ka index use karke program ko identify hota hai ke array se kaunsa task delete karna hai.

11. Delete Function

Delete function ka purpose selected task ko array se remove karna hai. Jab user kisi task ka Delete button press karta hai to us task ka index identify hota hai. Phir us index wala task array se remove kiya jata hai. Task remove hone ke baad render function dobara call hota hai. Isse updated array ke according list screen par dobara display hoti hai.

12. Method 1: innerHTML

Pehle method mein innerHTML use kiya gaya hai. Is method mein JavaScript HTML ki string bana kar list items create karti hai. Array ke har task ke liye list item aur Delete button ka HTML banaya jata hai aur phir usko ul ke andar add kiya jata hai. Ye method simple aur beginner-friendly hai kyun ke HTML structure directly samajh aata hai. Iska disadvantage ye hai ke HTML strings ke saath kaam karna padta hai aur large applications mein ye approach difficult ho sakti hai.

13. Method 2: createElement

Doosre method mein createElement use kiya gaya hai. Is method mein JavaScript ke through individual HTML elements create kiye jate hain. Pehle list item create hota hai, phir usmein task ka text add hota hai. Uske baad Delete button create hota hai aur button ko list item ke andar add kiya jata hai. Finally list item ko ul ke andar add kiya jata hai. Is method ka advantage ye hai ke har element ko individually control kiya ja sakta hai. Iska disadvantage ye hai ke innerHTML ke comparison mein zyada steps aur code hota hai.

14. Method 3: Template

Teesre method mein HTML template use kiya gaya hai. Template mein pehle se ek ready-made structure define kiya jata hai jisme list item, task text aur Delete button hota hai. Jab new task add hota hai to template ki ek copy banayi jati hai. Us copy mein actual task ka text add kiya jata hai aur Delete button ko us task ke saath connect kiya jata hai. Phir template ki copy ul ke andar display ki jati hai. Template ka advantage ye hai ke same HTML structure ko baar baar easily reuse kiya ja sakta hai.

15. Three Rendering Methods ka Comparison

InnerHTML method mein HTML string ke through list create ki jati hai. CreateElement method mein JavaScript ke through individual HTML elements create kiye jate hain. Template method mein ready-made HTML structure ki copy use ki jati hai. InnerHTML sabse simple method hai aur beginners ke liye easy hai. CreateElement zyada control provide karta hai lekin code zyada hota hai. Template repeated aur structured content ke liye useful hai aur code ko organized rakhta hai.

16. LocalStorage Challenge

Challenge ka purpose To-Do List ko persistent banana hai. Normal JavaScript array ka data page refresh hone ke baad reset ho sakta hai. Is problem ko solve karne ke liye localStorage use kiya gaya hai. LocalStorage browser mein data save karta hai aur page refresh hone ke baad bhi saved data available rehta hai. Isliye user ke tasks refresh ke baad bhi list mein wapas show ho sakte hain.

17. JSON.stringify ka Role

LocalStorage mein JavaScript array ko save karne ke liye JSON.stringify ka use kiya jata hai. Ye JavaScript array ko JSON string mein convert karta hai. Is conversion ke baad data localStorage mein save kiya jata hai. Iska simple concept hai ke JavaScript array ko storage ke suitable string format mein convert karna.

18. localStorage.setItem ka Role

SetItem ka purpose data ko localStorage mein save karna hai. Ismein ek key aur ek value hoti hai. To-Do List ke liye myTodos naam ki key use ki gayi hai. Updated todos array ko JSON string mein convert karke is key ke under save kiya jata hai. Is tarah browser mein To-Do List ka data store ho jata hai.

19. localStorage.getItem ka Role

GetItem ka purpose localStorage se saved data ko retrieve karna hai. Jab page refresh hota hai to program localStorage se pehle se saved To-Do List ka data read karta hai. Agar data available ho to usko program mein wapas load kiya jata hai.

20. JSON.parse ka Role

LocalStorage se data string ki form mein milta hai. Program ko is data ke saath JavaScript array ki form mein kaam karna hota hai. JSON.parse saved JSON string ko wapas JavaScript array mein convert karta hai. Iske baad program tasks ko normally read, add, delete aur render kar sakta hai.

21. Empty Array ka Role

Agar localStorage mein pehle se koi task saved nahi hai to program empty array se start karta hai. Ye usually first time page open hone par hota hai. Iska matlab hai ke agar koi saved data nahi hai to To-Do List empty hogi. Jab user new task add karega to woh array mein store hoga aur localStorage mein bhi save ho jayega.

22. trim ka Role

Trim input ke start aur end ke extra spaces remove karta hai. Iska purpose input ko clean rakhna hai. Agar user sirf spaces enter karta hai to program usko valid task nahi samajhta. Isse unnecessary spaces aur empty tasks ko avoid karne mein help milti hai.

23. Page Refresh Hone Par

Jab page refresh hota hai to program localStorage se saved tasks load karta hai. Saved data JSON.parse ki madad se wapas JavaScript array mein convert hota hai. Phir render function call hota hai. Render function loaded tasks ko ul ke andar display karta hai. Is wajah se page refresh hone ke baad bhi purani To-Do List wapas screen par show ho jati hai.

24. Complete Logic

Is task ka complete logic ye hai ke user input box mein task enter karta hai aur Add button press karta hai. Task input se read hota hai aur todos array mein store hota hai. Input box clear hota hai aur render function call hota hai. Render function array ke tasks ko ul ke andar display karta hai. Agar user Delete button press karta hai to selected task array se remove hota hai aur render function dobara call hota hai. Challenge mein updated array localStorage mein bhi save hota hai. Page refresh hone par localStorage se saved data retrieve hota hai, JSON.parse ke through array mein convert hota hai aur render function ke through screen par dobara display hota hai.
