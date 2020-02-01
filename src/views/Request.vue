<template>
    <Modal label="Request a payment" :help="true">
        <div v-if="!address">
            <main>
                <!-- <icon>
                    <Animation type="receive" />
                </icon> -->
                <div class="icon">
                    <svgicon icon="rocket" width="64" height="64" :fill="false" :original="true"></svgicon>
                </div>

                <label>Amount</label>
                <Amount :amount="amount" :unit="unit" />

                <label>From</label>
                <input placeholder="e.g. Jane Doe" type="text" bind:value={$receiver} />

                <label>Transaction note</label>
                <input maxlength="100" placeholder="e.g. Payment for 2 pizzas" type="text" bind:value={reference} />
            </main>

            <Footer tooltip>
                <p>Your request will be valid for 24 hours</p>
                <Button @click.native="generate" loading label="Generate request" loadingLabel="Generating ..." />
            </Footer>
        </div>

        <div v-else>
            <main>
                <h5>Valid for</h5>
                <h3>
                    <strong>{getTimeUnits(time, 'h')}</strong>
                    <small>h</small>
                    <strong>{getTimeUnits(time, 'm')}</strong>
                    <small>m</small>
                    <strong>{getTimeUnits(time, 's')}</strong>
                    <small>s</small>
                </h3>
                <QR value={link} />
            </main>

            <Footer>
                <Button onClick={copyAddress} label="Copy shareable link" />
            </Footer>
        </div>
    </Modal>
</template>

<script>
/* Import components. */
import { Amount, Button, Footer, Modal } from '@/components'
// import { Animation, Amount, Berny, Button, Footer, Header, View } from '~/components'

/* Import icons. */
// import '@/compiled-icons/fire'

// import { onDestroy } from 'svelte'
// import { address, receiver, setAddress } from '~/lib/account'
// import { marketPrice } from '~/lib/market'
// import { getIotas, goto, createLink, getTimeUnits, setClipboard } from '~/lib/helpers'

// import { error, notification } from '~/lib/app'
// import { QR } from '~/components'

export default {
    components: {
        Amount,
        Button,
        Footer,
        Modal,
    },
    data: () => {
        return {
            address: '',

            amount: 0,
            unit: 'sats',
            reference: '',
            loading: false,
            timer: null,
            time: 0,
        }
    },
    methods: {
        startTimer(data) {
            console.log('START TIMER')
            // if (!data) {
            //     if (time) {
            //         goto('')
            //     }
            //     return
            // }
            //
            // time = Math.abs((new Date($address.timeoutAt * 1000).getTime() - new Date().getTime()) / 1000)
            //
            // clearInterval(timer)
            // timer = setInterval(() => {
            //     time--
            // }, 1000)
        },

        async generate() {
            console.log('GENERATE')
            // if (!amount) {
            //     error.set('Please enter your requested amount')
            //     return
            // }
            //
            // loading = true
            // try {
            //     await setAddress(getIotas(amount, unit, $marketPrice), reference)
            // } catch (err) {
            //     loading = false
            //     error.set((err && err.message) || err || 'Error generating address')
            // }
        },

        copyAddress() {
            console.log('COPY ADDRESS')
            // setClipboard(link)
            // notification.set('Link copied to clipboard')
        },

        // onDestroy(() => {
        //     clearInterval(timer)
        //     address.set(null)
        // })
    },
    created: function () {
        // $: startTimer($address)

        // $: link = createLink($address, amount, unit, reference, $receiver, $marketPrice)
    },
    mounted: function () {
        //
    }
}
</script>

<style scoped>
main {
    flex: 1;
    padding: 40px 20px 0;
}

.icon {
    display: block;
    height: 120px;
    margin: -10px auto 5px;
}

@media only screen and (max-height: 600px) {
    .icon {
        height: 80px;
    }
}

p {
    text-align: center;
    margin-bottom: 20px;
}

h5 {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 14px;
    text-align: center;
}
h3 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 26px;
}
h3 strong {
    font-size: 28px;
    line-height: 28px;
    font-weight: 600;
}
h3 small {
    font-size: 13px;
    line-height: 14px;
    font-weight: 600;
    margin: 0 8px 1px 2px;
}
</style>