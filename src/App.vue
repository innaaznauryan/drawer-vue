<template>
  <Popover/>
  <main>
    <div class="btnContainer">
      <BaseButton data-dir="left">Show left drawer</BaseButton>
      <BaseButton data-dir="right">Show Right drawer</BaseButton>
      <BaseButton data-dir="top">Show Top drawer</BaseButton>
      <BaseButton data-dir="bottom">Show Bottom drawer</BaseButton>
    </div>
    <div class="btnContainer">
      <BaseButton data-backdrop="no-backdrop">Show drawer without backdrop</BaseButton>
      <BaseButton data-scroll="no-scroll">Show body scrolling disabled</BaseButton>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reiciendis molestiae rem vitae non omnis obcaecati. Exercitationem ab eveniet modi tenetur aliquid, voluptatibus soluta corrupti rerum rem minus, incidunt unde porro fuga est iste nesciunt! Quod ad blanditiis pariatur quae ipsum optio assumenda nam nulla aspernatur quidem excepturi odio molestiae consequatur, quia dolores distinctio possimus autem omnis voluptas atque. Sunt placeat, dolore nobis eveniet, animi dolor neque officiis voluptatum quo minus voluptate repellendus voluptatem exercitationem et odit. Aliquam quaerat quod excepturi laborum! Nemo eveniet libero totam, qui suscipit quisquam quia dolorem maxime velit vero, veritatis fugit doloribus illum aliquid enim. Doloremque ut fuga, possimus, reiciendis minima labore officiis necessitatibus commodi natus eum blanditiis asperiores quas doloribus? Et quae nostrum expedita, incidunt architecto quisquam fuga natus dolor dolores porro eaque. Inventore maxime asperiores sequi maiores delectus nulla, saepe consequuntur laborum vitae tempore ratione dolorem commodi doloremque sed nesciunt temporibus necessitatibus. Harum veritatis nulla vitae velit perferendis maiores obcaecati ratione repellat voluptatibus quibusdam, nisi facilis molestiae? Ducimus maxime eaque, quia accusantium, quod obcaecati optio mollitia ea architecto soluta, rem dolore iusto in quo minima ut. Quia architecto, doloribus nostrum dicta dolorum quibusdam et iste voluptate ipsam obcaecati quo dolore! Voluptatum explicabo, dolores quo rem ducimus accusamus beatae ullam voluptas nisi labore recusandae inventore repellat omnis aspernatur excepturi quod maiores? Necessitatibus rem totam deserunt porro dolorum tempore culpa odio quisquam. Iste pariatur sit expedita ipsa ipsum magnam repellat autem maiores, dicta officiis dolores! Quasi, laboriosam aperiam? Esse excepturi soluta, consequuntur maxime perspiciatis ad sit dolorum tenetur totam culpa doloribus at. Illum in sunt expedita perspiciatis dolores amet beatae molestiae saepe minima minus corrupti sequi, repudiandae quibusdam, labore cumque, inventore aliquid non eligendi! Pariatur, dolorem. Dolore dolores veritatis rem libero provident ex voluptate voluptas! Sequi, nam at maiores temporibus velit quia quos blanditiis minus assumenda tenetur alias fugiat incidunt deserunt! Explicabo est reprehenderit saepe totam autem fuga veritatis dolore deserunt sit quisquam adipisci voluptatibus facere esse consequatur impedit in id doloribus cumque, nulla nisi, doloremque quia! Sunt sed fugiat vero assumenda cupiditate quod eius numquam minima quo magnam. Molestias alias animi, sit quas minus beatae ratione. Debitis quia ipsum assumenda amet eos optio, dolorem, voluptatem dolore corrupti asperiores voluptatibus dolor eveniet id labore rerum natus voluptate. Error commodi quaerat eum nam voluptatem similique? Tempora delectus dolor repudiandae obcaecati maiores porro eligendi? Commodi culpa et atque earum nesciunt, odio ad explicabo excepturi accusamus similique esse eius minima ipsum. Tenetur quas quae natus, maxime, fugit alias inventore culpa non quam unde veniam laudantium optio ratione repudiandae porro eum quod animi eligendi explicabo blanditiis modi, delectus quos! Illum beatae quibusdam a eos ad doloribus obcaecati est ipsa sunt cum atque labore, eveniet ipsum. Eius quos eos commodi fugiat ab neque quis cum obcaecati! Delectus dolore, molestias voluptatibus laboriosam ullam ipsam sit ipsa distinctio ab. Fugit facere accusamus alias quaerat, aut quas aliquam provident voluptas! Distinctio dicta deserunt quo, natus totam placeat molestiae repellat qui cum vero modi saepe officiis accusantium eum, unde odit voluptatum ratione perspiciatis porro? Illum in sunt expedita perspiciatis dolores amet beatae molestiae saepe minima minus corrupti sequi, repudiandae quibusdam, labore cumque, inventore aliquid non eligendi! Pariatur, dolorem. Dolore dolores veritatis rem libero provident ex voluptate voluptas! Sequi, nam at maiores temporibus velit quia quos blanditiis minus assumenda tenetur alias fugiat incidunt deserunt! Explicabo est reprehenderit saepe totam autem fuga veritatis dolore deserunt sit quisquam adipisci voluptatibus facere esse consequatur impedit in id doloribus cumque, nulla nisi, doloremque quia! Sunt sed fugiat vero assumenda cupiditate quod eius numquam minima quo magnam. Molestias alias animi, sit quas minus beatae ratione. Debitis quia ipsum assumenda amet eos optio, dolorem, voluptatem dolore corrupti asperiores voluptatibus dolor eveniet id labore rerum natus voluptate. Error commodi quaerat eum nam voluptatem similique? Tempora delectus dolor repudiandae obcaecati maiores porro eligendi? Commodi culpa et atque earum nesciunt, odio ad explicabo excepturi accusamus similique esse eius minima ipsum. Tenetur quas quae natus, maxime, fugit alias inventore culpa non quam unde veniam laudantium optio ratione repudiandae porro eum quod animi eligendi explicabo blanditiis modi, delectus quos! Illum beatae quibusdam a eos ad doloribus obcaecati est ipsa sunt cum atque labore, eveniet ipsum. Eius quos eos commodi fugiat ab neque quis cum obcaecati! Delectus dolore, molestias voluptatibus laboriosam ullam ipsam sit ipsa distinctio ab. Fugit facere accusamus alias quaerat, aut quas aliquam provident voluptas! Distinctio dicta deserunt quo, natus totam placeat molestiae repellat qui cum vero modi saepe officiis accusantium eum, unde odit voluptatum ratione perspiciatis porro?</p>
  </main>
</template>

<script setup>
import Popover from "@/components/Popover.vue"
import BaseButton from "@/components/BaseButton.vue"
</script>

<style>
main {
  text-align: center;
  padding: 20px;
}

.btnContainer {
  margin: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
}
</style>