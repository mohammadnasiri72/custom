var arr = [{
    name : "نازنین مجیدی",
    title : "خریدار پوشاک",
    comment : '"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."'
} , 
{
    name : "رها شاهرخی",
    title : "خریدار آرایشی بهداشتی",
    comment : '"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."'
} , 
{
    name : "حسام جعفری ",
    title : "خریدار ابزار ",
    comment : '"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."'
} , 
{
    name : "محمدرضا پهلوان",
    title : "خریدار کت و شلوار",
    comment : '"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد."'
}]
var img = document.querySelectorAll(".img")
var text = document.querySelector(".text")
var textName = document.querySelector(".text-name")
var titleName = document.querySelector(".title-name")
var boxText = document.querySelector(".box-text")
img.forEach(function(ev , i){
    ev.addEventListener("click" , function(){
        img.forEach(function(e){
            e.classList.remove("active")
        })
        ev.classList.add("active")
        textName.innerHTML = arr[i].name
        titleName.innerHTML = arr[i].title
        text.innerHTML = arr[i].comment

        boxText.style.animationDuration = "4s"
    })
})
