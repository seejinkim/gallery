<script setup>
import {reactive} from 'vue';
import {login} from "@/service/accountService";
import {useRouter} from 'vue-router';

// 반응형 상태
const state = reactive({
    form: {
        loginId: "",
        loginPw: "",
    }
});

// 라운터 객체
const router = useRouter();

// 로그인 데이터 제출
const submit = async () => {
    const res = await login(state.form);

    switch (res.state) {
        case 200:
            await router.push("/");
            break;

        case 400:
            window.alert("입력하신 정보와 일지하는 회원이 없습니다.");
            break;
    }
};
</script>

<template>
    <div class="login">
        <div class="container">
            <form class="py-5 d-flex flex-column gap-3" @submit.prevent="submit">
                <h1 class="h5 mb-3">로그인</h1>
                <div class="form-floating">
                    <input type="email" class="form-control" id="loginId" placeholder="이메일" v-model="state.form.loginId">
                    <label for="loginId">이메일</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="loginPw" placeholder="페스워드" v-model="state.form.loginPw">
                    <label for="loginPw">패스워드</label>
                </div>
                <button type="submit" class="w-100 h6 btn py-3 btn-primary">로그인</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login > .container {
    max-width: 576px;
}
</style>