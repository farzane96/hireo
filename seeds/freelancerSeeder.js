const faker = require('faker');

const Freelancer = require('../models/freelancer');

module.exports = async () => {
    const freelancers = [];
    const skills = ['Laravel', 'Node.js', 'Express', 'Mysql', 'HTML', 'Mongodb', 'React', 'Vuejs', 'Photoshop', 'Redis'];
    const countries = ['آمریکا', 'ایران', 'فرانسه', 'اسپانیا', 'آلمان', 'سوئد'];
    const profilePictures = ['/images/user-avatar-big-01.jpg', '/images/user-avatar-big-02.jpg'];
    const firstNames = ['علیرضا', 'فرزانه', 'امیر', 'محسن', 'رویا', 'پردیس', 'مهدیس', 'مهدیه' ,'سامان', 'رامین', 'علی', 'محمد'];
    const lastNames = ['محسنی', 'صبوری', 'رمضانی', 'پارسا'];
    const tagLines = ['برنامه نویس', 'مهندس', 'مترجم', 'محقق'];
    for (let i = 0; i < 100; i++) {
        let firstName = faker.random.arrayElement(firstNames);
        freelancers.push({
            email: faker.internet.email(),
            password: '12345678',
            first_name: firstName,
            last_name: faker.random.arrayElement(lastNames),
            skills: skills.slice(faker.random.number(7)),
            minimal_hourly_rate: faker.random.number({ min: 40, max: 100 }),
            nationality: countries[faker.random.number(5)],
            bio: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. ',
            rate: faker.random.number({ min: 2, max: 5 }),
            tag_line: faker.random.arrayElement(tagLines),
            profile_picture: firstName === 'فرزانه' || firstName === 'رویا' || firstName === 'پردیس' || firstName === 'مهدیس' || firstName === 'مهدیه' ? '/images/user-avatar-big-03.jpg' : faker.random.arrayElement(profilePictures),
            success: faker.random.number({ min: 20, max: 100 }),
            rec: faker.random.number({ min: 50, max: 100 }),
            onTime: faker.random.number({ min: 50, max: 100 }),
            onBudget: faker.random.number({ min: 50, max: 100 }),
            view_count: faker.random.number({ min: 100, max: 250 }),
        });
    }
    return await Freelancer.insertMany(freelancers)
};