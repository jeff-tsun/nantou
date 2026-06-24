<script setup lang="ts">
import { ref } from 'vue'
import { FileText, Send, CheckCircle } from 'lucide-vue-next'
import PageBanner from '@/components/PageBanner.vue'
import bannerApplyImg from '@/assets/banner-apply.jpg'
import { ElMessage } from 'element-plus'
import axios from 'axios'

interface FormData {
  name: string
  gender: string
  birthday: string
  township: string
  idNumber: string
  company: string
  mobile: string
  referrer: string
  phoneWork: string
  phoneHome: string
  email: string
  address: string
  applicant: string
}

const initialForm = (): FormData => ({
  name: '', gender: '', birthday: '', township: '', idNumber: '',
  company: '', mobile: '', referrer: '', phoneWork: '', phoneHome: '',
  email: '', address: '', applicant: '',
})

const form = ref<FormData>(initialForm())
const agreed = ref(false)
const submitted = ref(false)
const errors = ref<Partial<Record<keyof FormData, boolean>>>({})
const showDialog = ref(false)
const isSubmitting = ref(false)

const requiredFields: (keyof FormData)[] = [
  'name', 'gender', 'birthday', 'township', 'idNumber', 'mobile', 'address', 'applicant'
]

const fieldDefs: { label: string; key: keyof FormData; type?: string; placeholder?: string; span?: number }[] = [
  { label: '姓名', key: 'name' },
  { label: '性別', key: 'gender' },
  { label: '出生日期', key: 'birthday', type: 'date' },
  { label: '鄉鎮', key: 'township', placeholder: '範例：南投縣/xx市 或 台北市/xx區。不限台灣' },
  { label: '身分證字號', key: 'idNumber' },
  { label: '服務單位', key: 'company' },
  { label: '手機', key: 'mobile', type: 'tel' },
  { label: '介紹人', key: 'referrer' },
  { label: '電話（公司）', key: 'phoneWork', type: 'tel' },
  { label: '電話（住宅）', key: 'phoneHome', type: 'tel' },
  { label: 'E-mail', key: 'email', type: 'email' },
  { label: '通訊地址', key: 'address', span: 2 },
  { label: '申請人', key: 'applicant' },
]

const validate = (): boolean => {
  const newErrors: Partial<Record<keyof FormData, boolean>> = {}
  let valid = true
  for (const key of requiredFields) {
    if (!form.value[key].trim()) {
      newErrors[key] = true
      valid = false
    }
  }
  errors.value = newErrors
  return valid
}

const handleSubmit = () => {
  if (!agreed.value) {
    ElMessage.error('請先勾選同意遵守章程')
    return
  }
  if (!validate()) {
    ElMessage.error('請填寫所有必填欄位')
    return
  }
  showDialog.value = true
}

const handleConfirm = async () => {
  isSubmitting.value = true
  
  try {
    const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbycGKGyuuB9nwhFroBTwziqMoOTJuEDfFmUr65RjasBVStxZ0KPYHLyt5hwdW_lKdqQJw/exec'
    
    // 將表單資料以 text/plain 傳送以繞過 CORS 預檢
    const response = await axios.post(GAS_API_URL, JSON.stringify(form.value), {
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      }
    })

    if (response.data.status === 'success') {
      showDialog.value = false
      submitted.value = true
      ElMessage.success('申請已送出！我們將盡快與您聯繫。')
    } else {
      ElMessage.error('發送失敗：' + (response.data.message || '未知錯誤'))
    }
  } catch (error) {
    console.error('API 呼叫錯誤', error)
    ElMessage.error('網路錯誤，請稍後再試。')
  } finally {
    isSubmitting.value = false
  }
}

const isRequired = (key: keyof FormData) => requiredFields.includes(key)

const resetForm = () => {
  form.value = initialForm()
  agreed.value = false
  errors.value = {}
  submitted.value = false
}

// Tailwind styled input class matching Shadcn
const inputClass = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
</script>

<template>
  <div>
    <PageBanner title="入會申請" :image="bannerApplyImg" />

    <div v-if="submitted" class="page-section">
      <div class="container mx-auto max-w-2xl text-center py-20 animate-fade-in-up">
        <div class="flex justify-center mb-6">
          <CheckCircle class="h-20 w-20 text-primary" />
        </div>
        <h2 class="text-3xl font-bold mb-4">申請已送出！</h2>
        <p class="text-muted-foreground text-lg mb-8">感謝您的申請，我們將盡快與您聯繫。</p>
        <div class="flex justify-center gap-4">
          <router-link to="/" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8">
            返回首頁
          </router-link>
          <button @click="resetForm" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8">
            還要再申請
          </button>
        </div>
      </div>
    </div>

    <div v-else class="page-section">
      <div class="container mx-auto max-w-3xl">
        <div class="animate-fade-in-up">
          <div class="flex items-center gap-3 mb-2 justify-center">
            <FileText class="h-8 w-8 text-primary" />
            <h1 class="text-3xl md:text-4xl font-bold">台北市南投縣同鄉會入會申請書</h1>
          </div>
          <p class="text-center text-muted-foreground mb-10">請填寫以下資料，完成入會申請</p>

          <form @submit.prevent="handleSubmit" class="space-y-8">
            <div class="grid gap-5 sm:grid-cols-2">
              <template v-for="f in fieldDefs" :key="f.key">
                <div v-if="f.key === 'gender'">
                  <label class="mb-1.5 block text-sm font-medium">
                    {{ f.label }}<span v-if="isRequired(f.key)" class="text-destructive ml-0.5">*</span>
                  </label>
                  <div class="flex gap-6 mt-2 h-10 items-center">
                    <label class="flex items-center gap-2 cursor-pointer text-sm font-medium leading-none">
                      <input type="radio" v-model="form.gender" value="男" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                      男
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer text-sm font-medium leading-none">
                      <input type="radio" v-model="form.gender" value="女" class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                      女
                    </label>
                  </div>
                  <p v-if="errors.gender" class="text-sm text-destructive mt-1">請選擇性別</p>
                </div>

                <div v-else :class="f.span === 2 ? 'sm:col-span-2' : ''">
                  <label :for="f.key" class="mb-1.5 block text-sm font-medium">
                    {{ f.label }}<span v-if="isRequired(f.key)" class="text-destructive ml-0.5">*</span>
                  </label>
                  <input
                    :id="f.key"
                    :type="f.type || 'text'"
                    :placeholder="f.placeholder"
                    v-model="form[f.key]"
                    @input="errors[f.key] = false"
                    :class="[inputClass, errors[f.key] ? 'border-destructive focus-visible:ring-destructive' : '']"
                  />
                  <p v-if="errors[f.key]" class="text-sm text-destructive mt-1">此欄位為必填</p>
                </div>
              </template>
            </div>

            <!-- Agreement -->
            <div class="rounded-lg border bg-muted/50 p-5">
              <div class="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  v-model="agreed"
                  class="mt-1 peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
                <label for="agree" class="text-sm leading-relaxed cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  今願遵守同鄉會章程加入為會員，凡會中一切章程以及根據章程所定之規例，願誠謹遵守，謹請許可入會是荷。
                </label>
              </div>
            </div>

            <div class="text-center">
              <button 
                type="submit" 
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-10 gap-2"
              >
                <Send class="h-4 w-4" />
                送出申請
              </button>
            </div>

            <div class="rounded-lg border bg-card p-5 space-y-2 text-sm">
              ※入會最後一步：填寫並送交申請後，請務必與秘書電話聯繫，確認入會審核進度與繳費狀態。 會館電話(02)2357-9813
            </div>
            <!-- Notes -->
            <div class="rounded-lg border bg-card p-5 space-y-2 text-sm text-muted-foreground">
              <h3 class="font-bold text-foreground text-base mb-3">備註</h3>
              <p>一、會員會費：貳仟元整(一年)。</p>
              <p>二、支票（抬頭：台北市南投縣同鄉會）或現金袋。</p>
              <p>三、本會館自購。會館地址：台北市仁愛路一段四號十二樓之二｜電話：(02)2357-9813</p>
              <p>四、匯款帳號：台北仁杭郵局〈700〉帳號：00027790018474｜戶名：台北市南投縣同鄉會陳怡潔</p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Element Plus Dialog -->
    <el-dialog
      v-model="showDialog"
      title="提醒"
      width="400px"
    >
      <span class="text-red-500">請務必與秘書電話聯繫，確認入會審核進度與繳費狀態。</span><br>
      <strong class="text-red-500">會館電話(02)2357-9813</strong>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="showDialog = false" :disabled="isSubmitting">取消</el-button>
          <el-button type="primary" @click="handleConfirm" :loading="isSubmitting">確認送出</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.4s ease-out forwards;
}
</style>
