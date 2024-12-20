import bookCover1 from '../../../Components/book_covers/Tafseer_1.png'
import bookCover2 from '../../../Components/book_covers/Tafseer_2.png'
import bookCover3 from '../../../Components/book_covers/tafseer_3.png'
import bookCover4 from '../../../Components/book_covers/tafseer_4.png'
import bookCovers5 from '../../../Components/book_covers/Seera1.png'
import bookCovers6 from '../../../Components/book_covers/Seera2.png'
import bookCovers7 from '../../../Components/book_covers/Seera3.png'
import bookCovers8 from '../../../Components/book_covers/aqeedha1.png'
import bookCovers9 from '../../../Components/book_covers/aqeedha2.png'
import bookCovers10 from '../../../Components/book_covers/aqeedha3.png'
import bookCovers11 from '../../../Components/book_covers/aqeedha4.png'
import bookCovers12 from '../../../Components/book_covers/aqeedha5.png'
import bookCovers13 from '../../../Components/book_covers/aqeedha6.png'
import bookCovers14 from '../../../Components/book_covers/hadith1.png'
import bookCovers15 from '../../../Components/book_covers/hadith2.png'
import bookCovers16 from '../../../Components/book_covers/hadith3.png'
import bookCovers17 from '../../../Components/book_covers/hadith4.png'
import bookCovers18 from '../../../Components/book_covers/fiqh1.png'
import bookCovers19 from '../../../Components/book_covers/fiqh2.png'
import bookCovers20 from '../../../Components/book_covers/fiqh3.png'
import bookCovers21 from '../../../Components/book_covers/fiqh4.png'
import bookCovers22 from '../../../Components/book_covers/ulumalam.png'
import bookCovers23 from '../../../Components/book_covers/ulumalam1.png'
import bookCovers24 from '../../../Components/book_covers/ulumalam2.png'
import bookCovers25 from '../../../Components/book_covers/ulumalam3.png'
import bookCovers26 from '../../../Components/book_covers/ulumalam4.png'
import bookCovers27 from '../../../Components/book_covers/Alraqayaq1.png'
import bookCovers28 from '../../../Components/book_covers/Alraqayaq2.png'
import bookCovers29 from '../../../Components/book_covers/Alraqayaq3.png'
import bookCovers30 from '../../../Components/book_covers/Alraqayaq4.png'
import { useState } from 'react'

const Books = () => {

    
    const booksData = {
        tafseer: [
            { id: 1, title: 'المختصر في تفسير القرآن الكريم', image: bookCover1, info: 'إن كتاب "المختصر في تفسير القرآن الكريم" الصادر من مركز تفسير للدراسات القرآنية يعتبر من الكتب المتميزة الموثوقة' },
            { id: 2, title: 'القرآن تدبر وعمل', image: bookCover2, info: 'إقبال المسلمين على كتاب ربهم سماعًا وتلاوة وحفظً مشهودًا وظاهرًا إلا أن هذا الإقبال ظل محصورًا في رتب الاستماع والتلاوة والحفظ دون التدبر والعمل. لأجل ذلك نشأت فكرة إعداد منهج يعين على تيسير تدبر القرآن الكريم والعمل به، ويخاطب مختلف الراغبين والحريصين' },
            { id: 3, title: 'هدايات القرآن', image: bookCover3, info: '' },
            { id: 4, title: 'تفسير السعدي', image: bookCover4, info: 'تفسير السعدي: في هذه الصفحة نسخة الكترونية مفهرسة، تتميز بسهولة التصفح والوصول إلى الآية من كتاب تفسير السعدي، وهو تفسير يعتني بإيضاح المعنى المقصود من الآية بعبارة واضحة مختصرة' },
        ],
        Seera: [
            { id: 5, title: 'الرحيق المختوم', image: bookCovers5, info: '' },
            { id: 6, title: 'الفصول في سيرة الرسول', image: bookCovers6, info: 'Description of Hadith Book 2' },
            { id: 7, title: 'الأرجوزة الميئية', image: bookCovers7, info: 'Description of Hadith Book 2' }
        ],
        Aqeedah: [
            { id: 8, title: 'الأصول الثلاثة', image: bookCovers8, info: '' },
            { id: 9, title: 'القواعد الاربعة ', image: bookCovers9, info: '' },
            { id: 10, title: 'كشف الشبهات', image: bookCovers10, info: '' },
            { id: 11, title: 'كتاب التوحيد', image: bookCovers11, info: '' },
            { id: 12, title: 'كتاب التوحيد', image: bookCovers12, info: '' },
            { id: 13, title: 'كتاب التوحيد', image: bookCovers13, info: '' }
        ],
        Hadith: [
            { id: 14, title: 'الأربعين النووية', image: bookCovers14, info: '' },
            { id: 15, title: 'عمدة الأحكام', image: bookCovers15, info: '' },
            { id: 16, title: 'بلوغ المرام', image: bookCovers16, info: '' },
            { id: 17, title: 'رياض الصالحين', image: bookCovers17, info: '' }
        ],
        Fiqh: [
            { id: 18, title: 'اداب المشي الى الصلاة', image: bookCovers18, info: '' },
            { id: 19, title: 'منهج السالكين', image: bookCovers19, info: '' },
            { id: 20, title: 'اخصر المختصرات', image: bookCovers20, info: '' },
            { id: 21, title: 'الملخص الفقهي ', image: bookCovers21, info: '' }
        ],
        UlumAlala:[
            { id: 22, title: 'أصول الفقه كتاب الورقات ', image: bookCovers22, info: '' },
            { id: 23, title: 'النحو الاجرومي', image: bookCovers23, info: '' },
            { id: 24, title: 'أصول التفسير مقدمة التفسير لابن تيمية', image: bookCovers24, info: '' },
            { id: 25, title: 'مصلح الحديث نخبة الفكر', image: bookCovers25, info: '' },
            { id: 26, title: 'المقدمة الجزرية', image: bookCovers26, info: '' }
        ],
        Alraqayaq:[
            { id: 27, title: 'الداء والدوا', image: bookCovers27, info: '' },
            { id: 28, title: 'الفوائد لابن قيم', image: bookCovers28, info: '' },
            { id: 29, title: 'الانس بالله أحمد بن ناصر الطيار', image: bookCovers29, info: '' },
            { id: 30, title: 'أحاديث الأخلاق عبد الرزاق البدر', image: bookCovers30, info: '' }
        ]
    }
    const [selectedCategory, setSelectedCategory] = useState('tafseer'); // Default category
    const [displayedBooks, setDisplayedBooks] = useState([]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleShowBooks = () => {
        // Fetch books based on the selected category
        const books = booksData[selectedCategory] || [];
        setDisplayedBooks(books);
    };
    /* Not Completed */
    
            return (
            <>
                <select 
                    name="Category" 
                    id="Catag" 
                    className='mainSelect' 
                    aria-label="Category selection"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="tafseer">Tafseer</option>
                    <option value="Seera">Seera</option>
                    <option value="Aqeedah">Aqeedah</option>
                    <option value="Hadith">Hadith</option>
                    <option value="Fiqh">Fiqh</option>
                    <option value="UlumAlala">UlumAlala</option>
                    <option value="Alraqayaq">Alraqayaq</option>

                </select>
                <button onClick={handleShowBooks} className='btn' style={{marginBottom:'15px', backgroundColor: '#ffd5a0', color: '#6b6865', borderRadius: '10px'}}>
                    Show Books
                </button>

                <div className='booksList'>
                    {displayedBooks.length > 0 ? (
                        displayedBooks.map(book => (
                            <div key={book.id} className='bookItem'>
                                <img src={book.image} alt={book.title} className='bookImage' />
                                <h3>{book.title}</h3>
                                <p>{book.info}</p>
                            </div>
                        ))
                    ) : (
                        <p>No books available for this category.</p>
                    )}
                </div>
                </>
)
}
export default Books; 