/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as Source } from 'SourceRoute/Checkout/Checkout.component';

import ProgressBar from '../../ProgressBar';

import './Checkout.style';

/** @namespace ScandiTestTask/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends Source {
    renderProgrss() {
        return <ProgressBar checkoutStep={ this.props.checkoutStep } />;
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderProgrss() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
